from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetIPv6PoolsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPv6PoolsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIPv6PoolsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIPv6PoolsSecurity:
    option1: Optional[GetIPv6PoolsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetIPv6PoolsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetIPv6PoolsRequest:
    query_params: GetIPv6PoolsQueryParams = field(default=None)
    security: GetIPv6PoolsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetIPv6Pools200ApplicationJSON:
    data: Optional[List[shared.IPv6Pool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetIPv6PoolsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetIPv6PoolsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_i_pv6_pools_200_application_json_object: Optional[GetIPv6Pools200ApplicationJSON] = field(default=None)
    get_i_pv6_pools_default_application_json_object: Optional[GetIPv6PoolsDefaultApplicationJSON] = field(default=None)
    
