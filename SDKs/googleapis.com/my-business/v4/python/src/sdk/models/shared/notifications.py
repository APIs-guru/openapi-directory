from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Notifications
    A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_types: Optional[List[NotificationsNotificationTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationTypes') }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicName') }})
    
