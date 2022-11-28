from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAdministrationEntityIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationEntityIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationEntityIDRequest:
    headers: DeleteAdministrationEntityIDHeaders = field()
    path_params: DeleteAdministrationEntityIDPathParams = field()
    

@dataclass
class DeleteAdministrationEntityIDResponse:
    content_type: str = field()
    status_code: int = field()
    
