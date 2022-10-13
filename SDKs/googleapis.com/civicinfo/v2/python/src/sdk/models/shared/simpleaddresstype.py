from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SimpleAddressType:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line1' }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line2' }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line3' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    
