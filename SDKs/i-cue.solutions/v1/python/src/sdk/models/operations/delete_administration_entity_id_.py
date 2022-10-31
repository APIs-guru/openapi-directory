from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAdministrationEntityIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationEntityIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationEntityIDRequest:
    path_params: DeleteAdministrationEntityIDPathParams = field(default=None)
    headers: DeleteAdministrationEntityIDHeaders = field(default=None)
    

@dataclass
class DeleteAdministrationEntityIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
