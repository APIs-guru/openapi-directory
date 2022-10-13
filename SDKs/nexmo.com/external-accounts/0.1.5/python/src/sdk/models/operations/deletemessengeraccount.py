from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteMessengerAccountPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessengerAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteMessengerAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMessengerAccountSecurity:
    option1: Optional[DeleteMessengerAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteMessengerAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteMessengerAccountRequest:
    path_params: DeleteMessengerAccountPathParams = field(default=None)
    security: DeleteMessengerAccountSecurity = field(default=None)
    

@dataclass
class DeleteMessengerAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
