from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPv6Pool:
    prefix: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    route_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route_target' }})
    
