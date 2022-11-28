from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LocationViewModel:
    admin_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminEmail') }})
    admin_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminName') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    friendly_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxCapacity') }})
    max_group_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxGroupSize') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName') }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    primary_business: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryBusiness') }})
    primary_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryCalendarId') }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    timezone_iana: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneIana') }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneId') }})
    timezone_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneOffset') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    
