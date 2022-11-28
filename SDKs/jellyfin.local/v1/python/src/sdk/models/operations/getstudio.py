from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudioPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudioQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudioSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetStudioRequest:
    path_params: GetStudioPathParams = field()
    query_params: GetStudioQueryParams = field()
    security: GetStudioSecurity = field()
    

@dataclass
class GetStudioResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    
