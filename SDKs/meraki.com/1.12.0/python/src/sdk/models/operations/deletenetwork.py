from dataclasses import dataclass, field



@dataclass
class DeleteNetworkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworkRequest:
    path_params: DeleteNetworkPathParams = field()
    

@dataclass
class DeleteNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    
