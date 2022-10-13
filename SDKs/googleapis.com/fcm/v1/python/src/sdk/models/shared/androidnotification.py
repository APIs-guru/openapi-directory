from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lightsettings

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
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    body_loc_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyLocArgs' }})
    body_loc_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bodyLocKey' }})
    bypass_proxy_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bypassProxyNotification' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    click_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickAction' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    default_light_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLightSettings' }})
    default_sound: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSound' }})
    default_vibrate_timings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVibrateTimings' }})
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    light_settings: Optional[lightsettings.LightSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lightSettings' }})
    local_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localOnly' }})
    notification_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationCount' }})
    notification_priority: Optional[AndroidNotificationNotificationPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPriority' }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sound' }})
    sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticky' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    ticker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticker' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    title_loc_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleLocArgs' }})
    title_loc_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'titleLocKey' }})
    vibrate_timings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vibrateTimings' }})
    visibility: Optional[AndroidNotificationVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
