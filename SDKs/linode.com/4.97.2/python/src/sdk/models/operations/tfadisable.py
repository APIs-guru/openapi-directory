from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TfaDisableSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class TfaDisableDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class TfaDisableRequest:
    security: TfaDisableSecurity = field()
    

@dataclass
class TfaDisableResponse:
    content_type: str = field()
    status_code: int = field()
    tfa_disable_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    tfa_disable_default_application_json_object: Optional[TfaDisableDefaultApplicationJSON] = field(default=None)
    
