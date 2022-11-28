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
class CustomerUpdateModel:
    address: Optional[AddressUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    contact: Optional[ContactUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    custom_fields: Optional[CustomFieldUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripeCustomerId') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
