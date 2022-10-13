from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerViewModel:
    birthdate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birthdate' }})
    business_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessName' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    created_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdOn' }})
    deleted_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedStatus' }})
    deleted_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedTime' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailInfo' }})
    email_promotion: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailPromotion' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invite_email_sent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inviteEmailSent' }})
    last_visit_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastVisitDate' }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    modified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedBy' }})
    modified_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedOn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    registered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registeredBy' }})
    registration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationDate' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    stripe_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stripeCustomerId' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    verification_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationDate' }})
    verified_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedBy' }})
    welcome_email_sent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcomeEmailSent' }})
    
