from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum(str, Enum):
    NOTIFICATION_CATEGORY_UNSPECIFIED = "NOTIFICATION_CATEGORY_UNSPECIFIED"
    ALL = "ALL"
    SUSPENSION = "SUSPENSION"
    SECURITY = "SECURITY"
    TECHNICAL = "TECHNICAL"
    BILLING = "BILLING"
    LEGAL = "LEGAL"
    PRODUCT_UPDATES = "PRODUCT_UPDATES"
    TECHNICAL_INCIDENTS = "TECHNICAL_INCIDENTS"

class GoogleCloudEssentialcontactsV1ContactValidationStateEnum(str, Enum):
    VALIDATION_STATE_UNSPECIFIED = "VALIDATION_STATE_UNSPECIFIED"
    VALID = "VALID"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class GoogleCloudEssentialcontactsV1ContactInput:
    r"""GoogleCloudEssentialcontactsV1ContactInput
    A contact that will receive notifications from Google Cloud.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    language_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTag') }})
    notification_category_subscriptions: Optional[List[GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationCategorySubscriptions') }})
    validate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateTime') }})
    validation_state: Optional[GoogleCloudEssentialcontactsV1ContactValidationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationState') }})
    

@dataclass_json
@dataclass
class GoogleCloudEssentialcontactsV1Contact:
    r"""GoogleCloudEssentialcontactsV1Contact
    A contact that will receive notifications from Google Cloud.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    language_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageTag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_category_subscriptions: Optional[List[GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationCategorySubscriptions') }})
    validate_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateTime') }})
    validation_state: Optional[GoogleCloudEssentialcontactsV1ContactValidationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationState') }})
    
