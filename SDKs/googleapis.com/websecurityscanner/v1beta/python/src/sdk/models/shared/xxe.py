from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class XxePayloadLocationEnum(str, Enum):
    LOCATION_UNSPECIFIED = "LOCATION_UNSPECIFIED"
    COMPLETE_REQUEST_BODY = "COMPLETE_REQUEST_BODY"


@dataclass_json
@dataclass
class Xxe:
    payload_location: Optional[XxePayloadLocationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadLocation' }})
    payload_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payloadValue' }})
    
