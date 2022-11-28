from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNotification:
    buganizer_notification: Optional[EnterpriseCrmEventbusProtoBuganizerNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buganizerNotification') }})
    email_address: Optional[EnterpriseCrmEventbusProtoAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    escalator_queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escalatorQueue') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    request: Optional[EnterpriseCrmEventbusProtoCustomSuspensionRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    
