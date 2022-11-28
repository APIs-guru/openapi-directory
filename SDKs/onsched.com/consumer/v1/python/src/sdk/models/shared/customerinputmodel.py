from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CustomerInputModel:
    address: Optional[AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    contact: Optional[ContactInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    custom_fields: Optional[CustomFieldInputModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstname') }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastname') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    send_lead_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendLeadNotification') }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripeCustomerId') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
