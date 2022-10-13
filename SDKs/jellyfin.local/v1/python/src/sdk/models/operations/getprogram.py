from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProgramPathParams:
    program_id: str = field(default=None, metadata={'path_param': { 'field_name': 'programId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProgramQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgramSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetProgramRequest:
    path_params: GetProgramPathParams = field(default=None)
    query_params: GetProgramQueryParams = field(default=None)
    security: GetProgramSecurity = field(default=None)
    

@dataclass
class GetProgramResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
