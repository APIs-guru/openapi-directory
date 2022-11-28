from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationInputModel:
    address: Optional[AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    admin_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmail') }})
    admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminName') }})
    business_hours: Optional[BusinessHoursInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessHours') }})
    defaults: Optional[BusinessDefaultsInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaults') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    friendly_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyId') }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacity') }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupSize') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    settings: Optional[OnlineSettingsInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    timezone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneName') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
