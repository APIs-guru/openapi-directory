from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TfaEnableSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class TfaEnableSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TfaEnableSecurity:
    option1: Optional[TfaEnableSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TfaEnableSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class TfaEnableRequest:
    security: TfaEnableSecurity = field(default=None)
    

@dataclass_json
@dataclass
class TfaEnableDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class TfaEnableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfa_enable_200_application_json_any: Optional[Any] = field(default=None)
    tfa_enable_default_application_json_object: Optional[TfaEnableDefaultApplicationJSON] = field(default=None)
    
