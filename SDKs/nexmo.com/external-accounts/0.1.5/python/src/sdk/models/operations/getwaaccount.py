from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWaAccountPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWaAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWaAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWaAccountSecurity:
    option1: Optional[GetWaAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWaAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWaAccountRequest:
    path_params: GetWaAccountPathParams = field(default=None)
    security: GetWaAccountSecurity = field(default=None)
    

@dataclass
class GetWaAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wa_account_response: Optional[shared.WaAccountResponse] = field(default=None)
    
