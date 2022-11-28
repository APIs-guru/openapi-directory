from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SubscriptionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    RESOURCE_ERROR = "RESOURCE_ERROR"


@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    A subscription resource. If none of `push_config` or `bigquery_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
    """
    
    ack_deadline_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ackDeadlineSeconds') }})
    bigquery_config: Optional[BigQueryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigqueryConfig') }})
    dead_letter_policy: Optional[DeadLetterPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadLetterPolicy') }})
    detached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detached') }})
    enable_exactly_once_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableExactlyOnceDelivery') }})
    enable_message_ordering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableMessageOrdering') }})
    expiration_policy: Optional[ExpirationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationPolicy') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageRetentionDuration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    push_config: Optional[PushConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushConfig') }})
    retain_acked_messages: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retainAckedMessages') }})
    retry_policy: Optional[RetryPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryPolicy') }})
    state: Optional[SubscriptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    topic_message_retention_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicMessageRetentionDuration') }})
    
