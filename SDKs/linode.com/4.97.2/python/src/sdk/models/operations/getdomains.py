from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDomainsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDomainsSecurity:
    option1: Optional[GetDomainsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDomainsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDomainsRequest:
    query_params: GetDomainsQueryParams = field(default=None)
    security: GetDomainsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDomains200ApplicationJSON:
    data: Optional[List[shared.Domain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetDomainsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetDomainsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_domains_200_application_json_object: Optional[GetDomains200ApplicationJSON] = field(default=None)
    get_domains_default_application_json_object: Optional[GetDomainsDefaultApplicationJSON] = field(default=None)
    
