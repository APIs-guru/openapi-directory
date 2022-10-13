from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkWebhooksHTTPServerPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkWebhooksHTTPServerRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedSecret' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class CreateNetworkWebhooksHTTPServerRequest:
    path_params: CreateNetworkWebhooksHTTPServerPathParams = field(default=None)
    request: CreateNetworkWebhooksHTTPServerRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkWebhooksHTTPServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_webhooks_http_server_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
