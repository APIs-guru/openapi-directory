from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addressinputmodel
from . import contactinputmodel
from . import customfieldinputmodel


@dataclass_json
@dataclass
class CustomerInputModel:
    address: Optional[addressinputmodel.AddressInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    contact: Optional[contactinputmodel.ContactInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    custom_fields: Optional[customfieldinputmodel.CustomFieldInputModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    send_lead_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendLeadNotification' }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeCustomerId' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
