from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class NotificationSettingNotificationTypesEnum(str, Enum):
    NOTIFICATION_TYPE_UNSPECIFIED = "NOTIFICATION_TYPE_UNSPECIFIED"
    GOOGLE_UPDATE = "GOOGLE_UPDATE"
    NEW_REVIEW = "NEW_REVIEW"
    UPDATED_REVIEW = "UPDATED_REVIEW"
    NEW_CUSTOMER_MEDIA = "NEW_CUSTOMER_MEDIA"
    NEW_QUESTION = "NEW_QUESTION"
    UPDATED_QUESTION = "UPDATED_QUESTION"
    NEW_ANSWER = "NEW_ANSWER"
    UPDATED_ANSWER = "UPDATED_ANSWER"
    DUPLICATE_LOCATION = "DUPLICATE_LOCATION"
    LOSS_OF_VOICE_OF_MERCHANT = "LOSS_OF_VOICE_OF_MERCHANT"
    VOICE_OF_MERCHANT_UPDATED = "VOICE_OF_MERCHANT_UPDATED"


@dataclass_json
@dataclass
class NotificationSetting:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_types: Optional[List[NotificationSettingNotificationTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTypes' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    
