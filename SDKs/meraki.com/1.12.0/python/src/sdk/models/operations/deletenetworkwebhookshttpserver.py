from dataclasses import dataclass, field



@dataclass
class DeleteNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(default=None, metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkWebhooksHTTPServerRequest:
    path_params: DeleteNetworkWebhooksHTTPServerPathParams = field(default=None)
    

@dataclass
class DeleteNetworkWebhooksHTTPServerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
