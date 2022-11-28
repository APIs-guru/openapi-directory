from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LocationListLocationTypeEnum(str, Enum):
    TARGETING_LOCATION_TYPE_UNSPECIFIED = "TARGETING_LOCATION_TYPE_UNSPECIFIED"
    TARGETING_LOCATION_TYPE_PROXIMITY = "TARGETING_LOCATION_TYPE_PROXIMITY"
    TARGETING_LOCATION_TYPE_REGIONAL = "TARGETING_LOCATION_TYPE_REGIONAL"


@dataclass_json
@dataclass
class LocationListInput:
    r"""LocationListInput
    A list of locations used for targeting.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    location_type: Optional[LocationListLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    

@dataclass_json
@dataclass
class LocationList:
    r"""LocationList
    A list of locations used for targeting.
    """
    
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationListId') }})
    location_type: Optional[LocationListLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
