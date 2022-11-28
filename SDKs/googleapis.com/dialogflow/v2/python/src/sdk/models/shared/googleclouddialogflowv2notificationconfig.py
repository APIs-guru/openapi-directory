from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum(str, Enum):
    MESSAGE_FORMAT_UNSPECIFIED = "MESSAGE_FORMAT_UNSPECIFIED"
    PROTO = "PROTO"
    JSON = "JSON"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2NotificationConfig:
    r"""GoogleCloudDialogflowV2NotificationConfig
    Defines notification behavior.
    """
    
    message_format: Optional[GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
