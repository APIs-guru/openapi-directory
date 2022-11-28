from dataclasses import dataclass, field



@dataclass
class DeletePeersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePeersIDRequest:
    path_params: DeletePeersIDPathParams = field()
    

@dataclass
class DeletePeersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
