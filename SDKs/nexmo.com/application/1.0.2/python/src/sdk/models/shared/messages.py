from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class MessagesWebhooksEndpointTypeEnum(str, Enum):
    INBOUND_URL = "inbound_url"
    STATUS_URL = "status_url"

class MessagesWebhooksHTTPMethodEnum(str, Enum):
    GET = "GET"
    POST = "POST"


@dataclass_json
@dataclass
class MessagesWebhooks:
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    endpoint_type: MessagesWebhooksEndpointTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint_type' }})
    http_method: MessagesWebhooksHTTPMethodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_method' }})
    

@dataclass_json
@dataclass
class Messages:
    webhooks: Optional[List[MessagesWebhooks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    
