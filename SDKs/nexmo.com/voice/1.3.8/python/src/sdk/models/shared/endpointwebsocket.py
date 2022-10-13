from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EndpointWebsocketContentTypeEnum(str, Enum):
    AUDIO_L16_RATE_EQUAL_8000 = "audio/l16;rate=8000"
    AUDIO_L16_RATE_EQUAL_16000 = "audio/l16;rate=16000"


@dataclass_json
@dataclass
class EndpointWebsocketHeaders:
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    

@dataclass_json
@dataclass
class EndpointWebsocket:
    content_type: EndpointWebsocketContentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content-type' }})
    headers: Optional[EndpointWebsocketHeaders] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headers' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
