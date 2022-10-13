from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PubsubConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    OK = "OK"
    SUBSCRIPTION_DELETED = "SUBSCRIPTION_DELETED"
    TOPIC_DELETED = "TOPIC_DELETED"
    SUBSCRIPTION_MISCONFIGURED = "SUBSCRIPTION_MISCONFIGURED"


@dataclass_json
@dataclass
class PubsubConfig:
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    state: Optional[PubsubConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
