from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessengerAccountPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessengerAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMessengerAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessengerAccountSecurity:
    option1: Optional[GetMessengerAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetMessengerAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetMessengerAccountRequest:
    path_params: GetMessengerAccountPathParams = field(default=None)
    security: GetMessengerAccountSecurity = field(default=None)
    

@dataclass
class GetMessengerAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    content_type: str = field(default=None)
    messenger_account_response: Optional[shared.MessengerAccountResponse] = field(default=None)
    status_code: int = field(default=None)
    
