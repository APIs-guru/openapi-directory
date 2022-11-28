from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceInputModel:
    address: Optional[AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    availability: Optional[AvailabilityInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    contact: Optional[ContactInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    custom_fields: Optional[CustomFieldInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    options: Optional[ResourceOptionsInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    service_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceIds') }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezoneId') }})
    
