from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetIPv6RangesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPv6RangesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetIPv6RangesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetIPv6RangesSecurity:
    option1: Optional[GetIPv6RangesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetIPv6RangesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetIPv6RangesRequest:
    query_params: GetIPv6RangesQueryParams = field(default=None)
    security: GetIPv6RangesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetIPv6Ranges200ApplicationJSON:
    data: Optional[List[shared.IPv6Range]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetIPv6RangesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetIPv6RangesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_i_pv6_ranges_200_application_json_object: Optional[GetIPv6Ranges200ApplicationJSON] = field(default=None)
    get_i_pv6_ranges_default_application_json_object: Optional[GetIPv6RangesDefaultApplicationJSON] = field(default=None)
    
