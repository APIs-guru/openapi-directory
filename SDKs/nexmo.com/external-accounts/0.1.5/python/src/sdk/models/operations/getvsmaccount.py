from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVsmAccountPathParams:
    external_id: str = field(default=None, metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVsmAccountSecurityOption1:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVsmAccountSecurityOption2:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetVsmAccountSecurity:
    option1: Optional[GetVsmAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetVsmAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetVsmAccountRequest:
    path_params: GetVsmAccountPathParams = field(default=None)
    security: GetVsmAccountSecurity = field(default=None)
    

@dataclass
class GetVsmAccountResponse:
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    vsm_account_response: Optional[shared.VsmAccountResponse] = field(default=None)
    
