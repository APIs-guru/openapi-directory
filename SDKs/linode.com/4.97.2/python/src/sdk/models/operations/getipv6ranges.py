from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetIPv6RangesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIPv6RangesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetIPv6Ranges200ApplicationJSON:
    data: Optional[List[shared.IPv6Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetIPv6RangesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetIPv6RangesRequest:
    query_params: GetIPv6RangesQueryParams = field()
    security: GetIPv6RangesSecurity = field()
    

@dataclass
class GetIPv6RangesResponse:
    content_type: str = field()
    status_code: int = field()
    get_i_pv6_ranges_200_application_json_object: Optional[GetIPv6Ranges200ApplicationJSON] = field(default=None)
    get_i_pv6_ranges_default_application_json_object: Optional[GetIPv6RangesDefaultApplicationJSON] = field(default=None)
    
