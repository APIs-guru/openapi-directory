from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import firstlastnameoriginedout


@dataclass_json
@dataclass
class FirstLastNamePhoneNumberGeoIn:
    first_last_name_origined_out: Optional[firstlastnameoriginedout.FirstLastNameOriginedOut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FirstLastNameOriginedOut' }})
    country_iso2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryIso2' }})
    country_iso2_alt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryIso2Alt' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    
