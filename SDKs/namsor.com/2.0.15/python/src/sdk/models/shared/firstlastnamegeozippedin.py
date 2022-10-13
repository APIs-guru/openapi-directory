from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FirstLastNameGeoZippedIn:
    country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryIso2' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    zip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipCode' }})
    
