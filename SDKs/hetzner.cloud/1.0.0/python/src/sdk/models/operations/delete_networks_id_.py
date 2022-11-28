from dataclasses import dataclass, field



@dataclass
class DeleteNetworksIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNetworksIDRequest:
    path_params: DeleteNetworksIDPathParams = field()
    

@dataclass
class DeleteNetworksIDResponse:
    content_type: str = field()
    status_code: int = field()
    
