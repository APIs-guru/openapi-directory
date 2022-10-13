from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MessageEventTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SENT = "SENT"
    RECEIVED = "RECEIVED"


@dataclass_json
@dataclass
class MessageEvent:
    compressed_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressedSizeBytes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[MessageEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uncompressed_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uncompressedSizeBytes' }})
    
