from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVsmAccountPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVsmAccountSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVsmAccountRequest:
    path_params: GetVsmAccountPathParams = field()
    security: GetVsmAccountSecurity = field()
    

@dataclass
class GetVsmAccountResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    vsm_account_response: Optional[shared.VsmAccountResponse] = field(default=None)
    
