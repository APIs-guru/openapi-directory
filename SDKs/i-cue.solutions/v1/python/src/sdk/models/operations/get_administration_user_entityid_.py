from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAdministrationUserEntityIDPathParams:
    entity_id: int = field(default=None, metadata={'path_param': { 'field_name': 'entityId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdministrationUserEntityIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class GetAdministrationUserEntityIDRequest:
    path_params: GetAdministrationUserEntityIDPathParams = field(default=None)
    headers: GetAdministrationUserEntityIDHeaders = field(default=None)
    

@dataclass
class GetAdministrationUserEntityIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
