from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateCreditCardSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateCreditCardSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCreditCardSecurity:
    option1: Optional[CreateCreditCardSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateCreditCardSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateCreditCardRequest:
    request: shared.CreditCard = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCreditCardSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateCreditCardDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateCreditCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_credit_card_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_credit_card_default_application_json_object: Optional[CreateCreditCardDefaultApplicationJSON] = field(default=None)
    
