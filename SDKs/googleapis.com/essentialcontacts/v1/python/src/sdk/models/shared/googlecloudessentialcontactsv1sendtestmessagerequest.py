from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum(str, Enum):
    NOTIFICATION_CATEGORY_UNSPECIFIED = "NOTIFICATION_CATEGORY_UNSPECIFIED"
    ALL = "ALL"
    SUSPENSION = "SUSPENSION"
    SECURITY = "SECURITY"
    TECHNICAL = "TECHNICAL"
    BILLING = "BILLING"
    LEGAL = "LEGAL"
    PRODUCT_UPDATES = "PRODUCT_UPDATES"
    TECHNICAL_INCIDENTS = "TECHNICAL_INCIDENTS"


@dataclass_json
@dataclass
class GoogleCloudEssentialcontactsV1SendTestMessageRequest:
    r"""GoogleCloudEssentialcontactsV1SendTestMessageRequest
    Request message for the SendTestMessage method.
    """
    
    contacts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    notification_category: Optional[GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationCategory') }})
    
