from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LithologyDescription:
    lithology_colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_colour') }})
    lithology_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_from') }})
    lithology_hardness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_hardness') }})
    lithology_moisture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_moisture') }})
    lithology_raw_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_raw_data') }})
    lithology_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lithology_to') }})
    water_bearing_estimated_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('water_bearing_estimated_flow') }})
    
