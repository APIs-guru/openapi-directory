from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CancelAccountSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CancelAccount200ApplicationJSON:
    survey_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('survey_link') }})
    

@dataclass_json
@dataclass
class CancelAccount409ApplicationJSONErrors:
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class CancelAccount409ApplicationJSON:
    errors: Optional[List[CancelAccount409ApplicationJSONErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass_json
@dataclass
class CancelAccountDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CancelAccountRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CancelAccountSecurity = field()
    

@dataclass
class CancelAccountResponse:
    content_type: str = field()
    status_code: int = field()
    cancel_account_200_application_json_object: Optional[CancelAccount200ApplicationJSON] = field(default=None)
    cancel_account_409_application_json_object: Optional[CancelAccount409ApplicationJSON] = field(default=None)
    cancel_account_default_application_json_object: Optional[CancelAccountDefaultApplicationJSON] = field(default=None)
    
