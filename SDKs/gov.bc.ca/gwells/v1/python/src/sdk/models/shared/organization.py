from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Organization:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax_tel' }})
    main_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'main_tel' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_guid' }})
    org_verbose_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'org_verbose_name' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    province_state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'province_state' }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_address' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website_url' }})
    
