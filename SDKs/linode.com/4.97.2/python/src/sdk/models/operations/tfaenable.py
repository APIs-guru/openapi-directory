from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TfaEnableSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class TfaEnableDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class TfaEnableRequest:
    security: TfaEnableSecurity = field()
    

@dataclass
class TfaEnableResponse:
    content_type: str = field()
    status_code: int = field()
    tfa_enable_200_application_json_any: Optional[Any] = field(default=None)
    tfa_enable_default_application_json_object: Optional[TfaEnableDefaultApplicationJSON] = field(default=None)
    
