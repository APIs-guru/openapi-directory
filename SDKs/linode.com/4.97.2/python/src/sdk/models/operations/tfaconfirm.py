from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TfaConfirmSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class TfaConfirmDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class TfaConfirmRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: TfaConfirmSecurity = field()
    

@dataclass
class TfaConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    tfa_confirm_200_application_json_any: Optional[Any] = field(default=None)
    tfa_confirm_default_application_json_object: Optional[TfaConfirmDefaultApplicationJSON] = field(default=None)
    
