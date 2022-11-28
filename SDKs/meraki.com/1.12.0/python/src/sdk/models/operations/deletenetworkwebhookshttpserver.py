from dataclasses import dataclass, field



@dataclass
class DeleteNetworkWebhooksHTTPServerPathParams:
    http_server_id: str = field(metadata={'path_param': { 'field_name': 'httpServerId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkWebhooksHTTPServerRequest:
    path_params: DeleteNetworkWebhooksHTTPServerPathParams = field()
    

@dataclass
class DeleteNetworkWebhooksHTTPServerResponse:
    content_type: str = field()
    status_code: int = field()
    
