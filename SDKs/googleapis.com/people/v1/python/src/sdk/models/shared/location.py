from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    r"""Location
    A person's location.
    """
    
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingId') }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    desk_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deskCode') }})
    floor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    floor_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorSection') }})
    metadata: Optional[FieldMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class LocationInput:
    r"""LocationInput
    A person's location.
    """
    
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingId') }})
    current: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current') }})
    desk_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deskCode') }})
    floor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floor') }})
    floor_section: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorSection') }})
    metadata: Optional[FieldMetadataInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
