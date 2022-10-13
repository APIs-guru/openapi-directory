from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subject:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    organizational_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationalUnit' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'province' }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAddress' }})
    
