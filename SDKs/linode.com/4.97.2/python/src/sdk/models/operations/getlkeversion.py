from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeVersionPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeVersionSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeVersionSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeVersionSecurity:
    option1: Optional[GetLkeVersionSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeVersionSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeVersionRequest:
    path_params: GetLkeVersionPathParams = field(default=None)
    security: GetLkeVersionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeVersionDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeVersionResponse:
    content_type: str = field(default=None)
    lke_version: Optional[shared.LkeVersion] = field(default=None)
    status_code: int = field(default=None)
    get_lke_version_default_application_json_object: Optional[GetLkeVersionDefaultApplicationJSON] = field(default=None)
    
