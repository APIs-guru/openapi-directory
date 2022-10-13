from dataclasses import dataclass, field



@dataclass
class DeleteNetworksIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworksIDRequest:
    path_params: DeleteNetworksIDPathParams = field(default=None)
    

@dataclass
class DeleteNetworksIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
