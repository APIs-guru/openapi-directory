from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateCreditCardSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateCreditCardDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateCreditCardRequest:
    request: shared.CreditCard = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCreditCardSecurity = field()
    

@dataclass
class CreateCreditCardResponse:
    content_type: str = field()
    status_code: int = field()
    create_credit_card_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_credit_card_default_application_json_object: Optional[CreateCreditCardDefaultApplicationJSON] = field(default=None)
    
