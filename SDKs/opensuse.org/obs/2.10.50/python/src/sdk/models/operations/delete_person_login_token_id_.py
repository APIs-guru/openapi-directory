from dataclasses import dataclass, field



@dataclass
class DeletePersonLoginTokenIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePersonLoginTokenIDRequest:
    path_params: DeletePersonLoginTokenIDPathParams = field(default=None)
    

@dataclass
class DeletePersonLoginTokenIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
