from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnableAccountMangedSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class EnableAccountMangedDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class EnableAccountMangedRequest:
    security: EnableAccountMangedSecurity = field()
    

@dataclass
class EnableAccountMangedResponse:
    content_type: str = field()
    status_code: int = field()
    enable_account_manged_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    enable_account_manged_default_application_json_object: Optional[EnableAccountMangedDefaultApplicationJSON] = field(default=None)
    
