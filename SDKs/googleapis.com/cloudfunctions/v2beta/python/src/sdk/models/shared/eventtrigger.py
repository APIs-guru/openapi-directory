from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EventTriggerRetryPolicyEnum(str, Enum):
    RETRY_POLICY_UNSPECIFIED = "RETRY_POLICY_UNSPECIFIED"
    RETRY_POLICY_DO_NOT_RETRY = "RETRY_POLICY_DO_NOT_RETRY"
    RETRY_POLICY_RETRY = "RETRY_POLICY_RETRY"


@dataclass_json
@dataclass
class EventTrigger:
    r"""EventTrigger
    Describes EventTrigger, used to request events to be sent from another service.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    retry_policy: Optional[EventTriggerRetryPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    trigger: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    trigger_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerRegion') }})
    

@dataclass_json
@dataclass
class EventTriggerInput:
    r"""EventTriggerInput
    Describes EventTrigger, used to request events to be sent from another service.
    """
    
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    event_filters: Optional[List[EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFilters') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    retry_policy: Optional[EventTriggerRetryPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    trigger_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerRegion') }})
    
