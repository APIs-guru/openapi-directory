from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Address:
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingNumber') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streetName') }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('townName') }})
    
