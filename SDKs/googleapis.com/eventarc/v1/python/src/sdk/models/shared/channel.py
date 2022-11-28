from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ChannelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class ChannelInput:
    r"""ChannelInput
    A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
    """
    
    crypto_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    

@dataclass_json
@dataclass
class Channel:
    r"""Channel
    A representation of the Channel resource. A Channel is a resource on which event providers publish their events. The published events are delivered through the transport associated with the channel. Note that a channel is associated with exactly one event provider.
    """
    
    activation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationToken') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    crypto_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    state: Optional[ChannelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
