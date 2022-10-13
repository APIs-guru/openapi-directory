from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import androidconfig
from . import apnsconfig
from . import fcmoptions
from . import notification
from . import webpushconfig


@dataclass_json
@dataclass
class Message:
    android: Optional[androidconfig.AndroidConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'android' }})
    apns: Optional[apnsconfig.ApnsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apns' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    fcm_options: Optional[fcmoptions.FcmOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcmOptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification: Optional[notification.Notification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    webpush: Optional[webpushconfig.WebpushConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webpush' }})
    
