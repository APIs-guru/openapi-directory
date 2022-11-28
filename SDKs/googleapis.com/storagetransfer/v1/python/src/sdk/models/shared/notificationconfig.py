from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NotificationConfigEventTypesEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    TRANSFER_OPERATION_SUCCESS = "TRANSFER_OPERATION_SUCCESS"
    TRANSFER_OPERATION_FAILED = "TRANSFER_OPERATION_FAILED"
    TRANSFER_OPERATION_ABORTED = "TRANSFER_OPERATION_ABORTED"

class NotificationConfigPayloadFormatEnum(str, Enum):
    PAYLOAD_FORMAT_UNSPECIFIED = "PAYLOAD_FORMAT_UNSPECIFIED"
    NONE = "NONE"
    JSON = "JSON"


@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following `PubsubMessage.attributes`: * `\"eventType\"`: one of the EventType values * `\"payloadFormat\"`: one of the PayloadFormat values * `\"projectId\"`: the project_id of the `TransferOperation` * `\"transferJobName\"`: the transfer_job_name of the `TransferOperation` * `\"transferOperationName\"`: the name of the `TransferOperation` The `PubsubMessage.data` contains a TransferOperation resource formatted according to the specified `PayloadFormat`.
    """
    
    event_types: Optional[List[NotificationConfigEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    payload_format: Optional[NotificationConfigPayloadFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadFormat') }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubTopic') }})
    
