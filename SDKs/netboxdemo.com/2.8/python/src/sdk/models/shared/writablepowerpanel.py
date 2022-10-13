from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritablePowerPanel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    powerfeed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerfeed_count' }})
    rack_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack_group' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    
