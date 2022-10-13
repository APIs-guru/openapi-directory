from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Service:
    boot_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boot_count' }})
    config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    config_request: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_request' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restart_request: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restart_request' }})
    time_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_created' }})
    time_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_updated' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
