from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetNetworkWebhooksHTTPServersPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNetworkWebhooksHTTPServersRequest:
    path_params: GetNetworkWebhooksHTTPServersPathParams = field(default=None)
    

@dataclass
class GetNetworkWebhooksHTTPServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_network_webhooks_http_servers_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
