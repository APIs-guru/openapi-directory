from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addressupdatemodel
from . import contactupdatemodel
from . import customfieldupdatemodel


@dataclass_json
@dataclass
class CustomerUpdateModel:
    address: Optional[addressupdatemodel.AddressUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    contact: Optional[contactupdatemodel.ContactUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    custom_fields: Optional[customfieldupdatemodel.CustomFieldUpdateModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeCustomerId' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
