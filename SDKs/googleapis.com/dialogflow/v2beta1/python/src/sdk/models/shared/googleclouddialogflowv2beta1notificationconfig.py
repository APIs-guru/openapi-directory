from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum(str, Enum):
    MESSAGE_FORMAT_UNSPECIFIED = "MESSAGE_FORMAT_UNSPECIFIED"
    PROTO = "PROTO"
    JSON = "JSON"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1NotificationConfig:
    message_format: Optional[GoogleCloudDialogflowV2beta1NotificationConfigMessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
