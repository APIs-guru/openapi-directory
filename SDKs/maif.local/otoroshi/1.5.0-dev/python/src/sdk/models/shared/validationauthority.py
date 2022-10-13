from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidationAuthority:
    always_valid: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alwaysValid' }})
    bad_ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'badTtl' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    good_ttl: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goodTtl' }})
    headers: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    host: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    no_cache: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noCache' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    timeout: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
