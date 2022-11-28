from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SimpleAddressType:
    r"""SimpleAddressType
    A simple representation of an address.
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line1') }})
    line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line2') }})
    line3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line3') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    
