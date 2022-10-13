from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Store:
    address: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    hooks_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_token' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    weight_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight_unit' }})
    
