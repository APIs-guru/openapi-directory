from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChannelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class Channel:
    activation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationToken' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    crypto_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cryptoKeyName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    state: Optional[ChannelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
