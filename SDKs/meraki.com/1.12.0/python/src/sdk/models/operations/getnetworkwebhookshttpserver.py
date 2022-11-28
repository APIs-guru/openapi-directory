from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWebhooksHTTPServerRequest:
    path_params: GetNetworkWebhooksHTTPServerPathParams = field()
    

@dataclass
class GetNetworkWebhooksHTTPServerResponse:
    content_type: str = field()
    status_code: int = field()
    get_network_webhooks_http_server_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
