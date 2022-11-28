from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceAllocationViewModel:
    booking_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingCount') }})
    booking_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingLimit') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    repeat: Optional[RepeatViewModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeat') }})
    repeats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeats') }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceDescription') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceId') }})
    resource_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceImageUrl') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    service_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDescription') }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDuration') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    service_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceImageUrl') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    timezone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneName') }})
    timezone_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneOffset') }})
    
