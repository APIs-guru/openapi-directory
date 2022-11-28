from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAdministrationUserEntityIDIDPathParams:
    entity_id: int = field(metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationUserEntityIDIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationUserEntityIDIDRequest:
    headers: DeleteAdministrationUserEntityIDIDHeaders = field()
    path_params: DeleteAdministrationUserEntityIDIDPathParams = field()
    

@dataclass
class DeleteAdministrationUserEntityIDIDResponse:
    content_type: str = field()
    status_code: int = field()
    
