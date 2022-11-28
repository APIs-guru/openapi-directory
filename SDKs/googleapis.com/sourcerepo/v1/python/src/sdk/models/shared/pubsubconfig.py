from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PubsubConfigMessageFormatEnum(str, Enum):
    MESSAGE_FORMAT_UNSPECIFIED = "MESSAGE_FORMAT_UNSPECIFIED"
    PROTOBUF = "PROTOBUF"
    JSON = "JSON"


@dataclass_json
@dataclass
class PubsubConfig:
    r"""PubsubConfig
    Configuration to publish a Cloud Pub/Sub message.
    """
    
    message_format: Optional[PubsubConfigMessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageFormat') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
