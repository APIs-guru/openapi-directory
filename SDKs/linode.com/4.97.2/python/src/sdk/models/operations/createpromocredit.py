from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class CreatePromoCreditRequestBody:
    promo_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('promo_code') }})
    

@dataclass
class CreatePromoCreditSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreatePromoCreditDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreatePromoCreditRequest:
    security: CreatePromoCreditSecurity = field()
    request: Optional[CreatePromoCreditRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePromoCreditResponse:
    content_type: str = field()
    status_code: int = field()
    promotion: Optional[shared.Promotion] = field(default=None)
    create_promo_credit_default_application_json_object: Optional[CreatePromoCreditDefaultApplicationJSON] = field(default=None)
    
