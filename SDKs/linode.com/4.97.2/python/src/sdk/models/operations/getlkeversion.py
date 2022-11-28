from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeVersionPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeVersionSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLkeVersionDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeVersionRequest:
    path_params: GetLkeVersionPathParams = field()
    security: GetLkeVersionSecurity = field()
    

@dataclass
class GetLkeVersionResponse:
    content_type: str = field()
    status_code: int = field()
    lke_version: Optional[shared.LkeVersion] = field(default=None)
    get_lke_version_default_application_json_object: Optional[GetLkeVersionDefaultApplicationJSON] = field(default=None)
    
