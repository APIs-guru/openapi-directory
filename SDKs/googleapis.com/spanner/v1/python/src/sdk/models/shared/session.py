from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Session:
    approximate_last_use_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approximateLastUseTime' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorRole' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
