from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeletePersonLoginTokenIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePersonLoginTokenIDRequest:
    path_params: DeletePersonLoginTokenIDPathParams = field()
    

@dataclass
class DeletePersonLoginTokenIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
