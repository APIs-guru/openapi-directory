from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    is_disabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isDisabled', 'style': 'form', 'explode': True }})
    is_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isHidden', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field()
    security: GetUsersSecurity = field()
    

@dataclass
class GetUsersResponse:
    content_type: str = field()
    status_code: int = field()
    user_dtos: Optional[List[shared.UserDto]] = field(default=None)
    
