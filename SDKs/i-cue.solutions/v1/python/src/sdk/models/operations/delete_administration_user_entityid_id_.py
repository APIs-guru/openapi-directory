from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAdministrationUserEntityIDIDPathParams:
    entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationUserEntityIDIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationUserEntityIDIDRequest:
    path_params: DeleteAdministrationUserEntityIDIDPathParams = field(default=None)
    headers: DeleteAdministrationUserEntityIDIDHeaders = field(default=None)
    

@dataclass
class DeleteAdministrationUserEntityIDIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
