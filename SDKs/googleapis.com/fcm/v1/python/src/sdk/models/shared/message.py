from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Message:
    r"""Message
    Message to send by Firebase Cloud Messaging Service.
    """
    
    android: Optional[AndroidConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('android') }})
    apns: Optional[ApnsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apns') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    fcm_options: Optional[FcmOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fcmOptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    webpush: Optional[WebpushConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webpush') }})
    
