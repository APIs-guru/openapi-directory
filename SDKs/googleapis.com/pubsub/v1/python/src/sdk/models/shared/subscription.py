from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bigqueryconfig
from . import deadletterpolicy
from . import expirationpolicy
from . import pushconfig
from . import retrypolicy

class SubscriptionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    RESOURCE_ERROR = "RESOURCE_ERROR"


@dataclass_json
@dataclass
class Subscription:
    ack_deadline_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackDeadlineSeconds' }})
    bigquery_config: Optional[bigqueryconfig.BigQueryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigqueryConfig' }})
    dead_letter_policy: Optional[deadletterpolicy.DeadLetterPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deadLetterPolicy' }})
    detached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detached' }})
    enable_exactly_once_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExactlyOnceDelivery' }})
    enable_message_ordering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableMessageOrdering' }})
    expiration_policy: Optional[expirationpolicy.ExpirationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationPolicy' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageRetentionDuration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    push_config: Optional[pushconfig.PushConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushConfig' }})
    retain_acked_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retainAckedMessages' }})
    retry_policy: Optional[retrypolicy.RetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryPolicy' }})
    state: Optional[SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    topic_message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicMessageRetentionDuration' }})
    
