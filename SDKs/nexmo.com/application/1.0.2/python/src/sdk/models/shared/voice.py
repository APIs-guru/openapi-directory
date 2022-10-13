from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class VoiceWebhooksEndpointTypeEnum(str, Enum):
    ANSWER_URL = "answer_url"
    EVENT_URL = "event_url"

class VoiceWebhooksHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclass
class VoiceWebhooks:
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    endpoint_type: VoiceWebhooksEndpointTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint_type' }})
    http_method: VoiceWebhooksHTTPMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    

@dataclass_json
@dataclass
class Voice:
    webhooks: Optional[List[VoiceWebhooks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    
