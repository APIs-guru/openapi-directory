from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUsersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetUsersSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSecurity:
    option1: Optional[GetUsersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = field(default=None)
    security: GetUsersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUsers200ApplicationJSON:
    data: Optional[List[shared.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetUsersDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_users_200_application_json_object: Optional[GetUsers200ApplicationJSON] = field(default=None)
    get_users_default_application_json_object: Optional[GetUsersDefaultApplicationJSON] = field(default=None)
    
