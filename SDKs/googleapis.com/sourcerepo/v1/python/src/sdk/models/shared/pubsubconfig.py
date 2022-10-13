from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PubsubConfigMessageFormatEnum(str, Enum):
    MESSAGE_FORMAT_UNSPECIFIED = "MESSAGE_FORMAT_UNSPECIFIED"
    PROTOBUF = "PROTOBUF"
    JSON = "JSON"


@dataclass_json
@dataclass
class PubsubConfig:
    message_format: Optional[PubsubConfigMessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
