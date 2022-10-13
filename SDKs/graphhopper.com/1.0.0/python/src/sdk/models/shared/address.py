from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AddressCurbsideEnum(str, Enum):
    RIGHT = "right"
    LEFT = "left"
    ANY = "any"


@dataclass_json
@dataclass
class Address:
    curbside: Optional[AddressCurbsideEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside' }})
    lat: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    lon: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    street_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_hint' }})
    
