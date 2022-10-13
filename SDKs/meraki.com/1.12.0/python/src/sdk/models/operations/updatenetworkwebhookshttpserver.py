from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkWebhooksHTTPServerRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    shared_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedSecret' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class UpdateNetworkWebhooksHTTPServerRequest:
    path_params: UpdateNetworkWebhooksHTTPServerPathParams = field(default=None)
    request: Optional[UpdateNetworkWebhooksHTTPServerRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkWebhooksHTTPServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
