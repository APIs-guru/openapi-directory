from dataclasses import dataclass, field



@dataclass
class DeleteNetworkPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkRequest:
    path_params: DeleteNetworkPathParams = field(default=None)
    

@dataclass
class DeleteNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
