from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAdministrationUserEntityIDPathParams:
    entity_id: int = field(metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationUserEntityIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationUserEntityIDRequest:
    headers: GetAdministrationUserEntityIDHeaders = field()
    path_params: GetAdministrationUserEntityIDPathParams = field()
    

@dataclass
class GetAdministrationUserEntityIDResponse:
    content_type: str = field()
    status_code: int = field()
    
