from dataclasses import dataclass, field



@dataclass
class DeletePeersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePeersIDRequest:
    path_params: DeletePeersIDPathParams = field(default=None)
    

@dataclass
class DeletePeersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
