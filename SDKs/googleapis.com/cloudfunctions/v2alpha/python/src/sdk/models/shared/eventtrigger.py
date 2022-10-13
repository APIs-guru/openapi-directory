from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventfilter

class EventTriggerRetryPolicyEnum(str, Enum):
    RETRY_POLICY_UNSPECIFIED = "RETRY_POLICY_UNSPECIFIED"
    RETRY_POLICY_DO_NOT_RETRY = "RETRY_POLICY_DO_NOT_RETRY"
    RETRY_POLICY_RETRY = "RETRY_POLICY_RETRY"


@dataclass_json
@dataclass
class EventTrigger:
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    event_filters: Optional[List[eventfilter.EventFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventFilters' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    retry_policy: Optional[EventTriggerRetryPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    trigger: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    trigger_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerRegion' }})
    
