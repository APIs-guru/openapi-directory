from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAccountSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateAccountSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateAccountSecurity:
    option1: Optional[UpdateAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateAccountRequest:
    request: shared.Account = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateAccountDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateAccountResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_account_default_application_json_object: Optional[UpdateAccountDefaultApplicationJSON] = field(default=None)
    
