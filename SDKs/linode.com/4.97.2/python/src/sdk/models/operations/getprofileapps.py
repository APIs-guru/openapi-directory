from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProfileAppsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProfileAppsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetProfileAppsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProfileAppsSecurity:
    option1: Optional[GetProfileAppsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetProfileAppsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetProfileAppsRequest:
    query_params: GetProfileAppsQueryParams = field(default=None)
    security: GetProfileAppsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetProfileApps200ApplicationJSON:
    data: Optional[List[shared.AuthorizedApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetProfileAppsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetProfileAppsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_profile_apps_200_application_json_object: Optional[GetProfileApps200ApplicationJSON] = field(default=None)
    get_profile_apps_default_application_json_object: Optional[GetProfileAppsDefaultApplicationJSON] = field(default=None)
    
