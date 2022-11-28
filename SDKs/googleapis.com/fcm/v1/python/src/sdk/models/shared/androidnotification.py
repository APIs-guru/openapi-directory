from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AndroidNotificationNotificationPriorityEnum(str, Enum):
    PRIORITY_UNSPECIFIED = "PRIORITY_UNSPECIFIED"
    PRIORITY_MIN = "PRIORITY_MIN"
    PRIORITY_LOW = "PRIORITY_LOW"
    PRIORITY_DEFAULT = "PRIORITY_DEFAULT"
    PRIORITY_HIGH = "PRIORITY_HIGH"
    PRIORITY_MAX = "PRIORITY_MAX"

class AndroidNotificationVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    PRIVATE = "PRIVATE"
    PUBLIC = "PUBLIC"
    SECRET = "SECRET"


@dataclass_json
@dataclass
class AndroidNotification:
    r"""AndroidNotification
    Notification to send to android devices.
    """
    
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    body_loc_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyLocArgs') }})
    body_loc_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bodyLocKey') }})
    bypass_proxy_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bypassProxyNotification') }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    click_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickAction') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    default_light_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLightSettings') }})
    default_sound: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSound') }})
    default_vibrate_timings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVibrateTimings') }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    light_settings: Optional[LightSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lightSettings') }})
    local_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localOnly') }})
    notification_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationCount') }})
    notification_priority: Optional[AndroidNotificationNotificationPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationPriority') }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sound') }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticky') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ticker') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_loc_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleLocArgs') }})
    title_loc_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('titleLocKey') }})
    vibrate_timings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vibrateTimings') }})
    visibility: Optional[AndroidNotificationVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
