from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Facility:
    address_country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_country' }})
    address_locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_locality' }})
    address_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_region' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organisation_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organisation_name' }})
    peeringdb_facility_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringdb_facility_id' }})
    pops: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pops' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    street_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_address' }})
    
