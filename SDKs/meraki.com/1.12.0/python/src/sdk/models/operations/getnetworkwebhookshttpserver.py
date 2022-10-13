from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWebhooksHTTPServerRequest:
    path_params: GetNetworkWebhooksHTTPServerPathParams = field(default=None)
    

@dataclass
class GetNetworkWebhooksHTTPServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
