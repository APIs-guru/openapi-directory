from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompanyViewModel:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    booking_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingWebhookUrl' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    customer_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerWebhookUrl' }})
    deleted_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedStatus' }})
    deleted_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedTime' }})
    disable_email_and_sms_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableEmailAndSmsNotifications' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_from_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationFromEmailAddress' }})
    notification_from_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationFromName' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    registration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationDate' }})
    registration_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationEmail' }})
    reminder_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reminderWebhookUrl' }})
    resource_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceWebhookUrl' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    timezone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneId' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
