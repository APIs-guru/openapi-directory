from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceInputModel:
    availability: Optional[AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    booking_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingInterval') }})
    booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingLimit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    fees: Optional[ServiceFeesInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fees') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacity') }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupSize') }})
    media_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaPageUrl') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[ServiceOptionsInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    service_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceGroupId') }})
    settings: Optional[ServiceSettingsInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
