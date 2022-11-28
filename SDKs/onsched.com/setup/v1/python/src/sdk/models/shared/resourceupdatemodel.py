from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceUpdateModel:
    address: Optional[AddressUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    availability: Optional[AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    contact: Optional[ContactUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    custom_fields: Optional[CustomFieldUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[ResourceOptionsUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    service_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIds') }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneId') }})
    
