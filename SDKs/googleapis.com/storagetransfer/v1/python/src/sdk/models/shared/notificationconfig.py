from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    event_types: Optional[List[NotificationConfigEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypes' }})
    payload_format: Optional[NotificationConfigPayloadFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadFormat' }})
    pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubTopic' }})
    
