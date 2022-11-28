from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateAccountSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateAccountDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateAccountRequest:
    request: shared.AccountInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAccountSecurity = field()
    

@dataclass
class UpdateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    update_account_default_application_json_object: Optional[UpdateAccountDefaultApplicationJSON] = field(default=None)
    
