from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeVersionsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeVersionsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeVersionsSecurity:
    option1: Optional[GetLkeVersionsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeVersionsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeVersionsRequest:
    security: GetLkeVersionsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeVersions200ApplicationJSON:
    data: Optional[List[shared.LkeVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLkeVersionsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeVersionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_versions_200_application_json_object: Optional[GetLkeVersions200ApplicationJSON] = field(default=None)
    get_lke_versions_default_application_json_object: Optional[GetLkeVersionsDefaultApplicationJSON] = field(default=None)
    
