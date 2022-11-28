from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWaAccountPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWaAccountSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetWaAccountRequest:
    path_params: GetWaAccountPathParams = field()
    security: GetWaAccountSecurity = field()
    

@dataclass
class GetWaAccountResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    wa_account_response: Optional[shared.WaAccountResponse] = field(default=None)
    
