from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import querycontent


@dataclass_json
@dataclass
class SavedQuery:
    content: Optional[querycontent.QueryContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    last_updater: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdater' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
