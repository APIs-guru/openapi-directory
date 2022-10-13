from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LifecycleConfig:
    auto_delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDeleteTime' }})
    auto_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoDeleteTtl' }})
    idle_delete_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleDeleteTtl' }})
    idle_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idleStartTime' }})
    
