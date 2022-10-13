from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class NotificationsNotificationTypesEnum(str, Enum):
    NOTIFICATION_TYPE_UNSPECIFIED = "NOTIFICATION_TYPE_UNSPECIFIED"
    GOOGLE_UPDATE = "GOOGLE_UPDATE"
    NEW_REVIEW = "NEW_REVIEW"
    UPDATED_REVIEW = "UPDATED_REVIEW"
    NEW_CUSTOMER_MEDIA = "NEW_CUSTOMER_MEDIA"
    NEW_QUESTION = "NEW_QUESTION"
    UPDATED_QUESTION = "UPDATED_QUESTION"
    NEW_ANSWER = "NEW_ANSWER"
    UPDATED_ANSWER = "UPDATED_ANSWER"
    UPDATED_LOCATION_STATE = "UPDATED_LOCATION_STATE"


@dataclass_json
@dataclass
class Notifications:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_types: Optional[List[NotificationsNotificationTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationTypes' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicName' }})
    
