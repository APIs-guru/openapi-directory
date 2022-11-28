from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PubsubConfigStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    OK = "OK"
    SUBSCRIPTION_DELETED = "SUBSCRIPTION_DELETED"
    TOPIC_DELETED = "TOPIC_DELETED"
    SUBSCRIPTION_MISCONFIGURED = "SUBSCRIPTION_MISCONFIGURED"


@dataclass_json
@dataclass
class PubsubConfigInput:
    r"""PubsubConfigInput
    PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
    """
    
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    state: Optional[PubsubConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

@dataclass_json
@dataclass
class PubsubConfig:
    r"""PubsubConfig
    PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
    """
    
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    state: Optional[PubsubConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
