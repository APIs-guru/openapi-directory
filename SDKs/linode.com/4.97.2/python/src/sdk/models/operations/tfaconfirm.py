from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TfaConfirmSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class TfaConfirmSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class TfaConfirmSecurity:
    option1: Optional[TfaConfirmSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[TfaConfirmSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class TfaConfirmRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TfaConfirmSecurity = field(default=None)
    

@dataclass_json
@dataclass
class TfaConfirmDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class TfaConfirmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfa_confirm_200_application_json_any: Optional[Any] = field(default=None)
    tfa_confirm_default_application_json_object: Optional[TfaConfirmDefaultApplicationJSON] = field(default=None)
    
