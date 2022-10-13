from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import licenseedaily


@dataclass_json
@dataclass
class Licensee:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    daily: Optional[licenseedaily.LicenseeDaily] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daily' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    whitelist: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whitelist' }})
    
