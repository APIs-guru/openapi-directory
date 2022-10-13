from dataclasses import dataclass, field



@dataclass
class DeleteNetworkPiiRequestPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'requestId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkPiiRequestRequest:
    path_params: DeleteNetworkPiiRequestPathParams = field(default=None)
    

@dataclass
class DeleteNetworkPiiRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
