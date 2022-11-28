from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteMessengerAccountPathParams:
    external_id: str = field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessengerAccountSecurity:
    basic_auth: Optional[shared.SchemeBasicAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared.SchemeBearerAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteMessengerAccountRequest:
    path_params: DeleteMessengerAccountPathParams = field()
    security: DeleteMessengerAccountSecurity = field()
    

@dataclass
class DeleteMessengerAccountResponse:
    content_type: str = field()
    status_code: int = field()
    four_hundred_and_one_response: Optional[shared.FourHundredAndOneResponse] = field(default=None)
    four_hundred_and_three_response: Optional[shared.FourHundredAndThreeResponse] = field(default=None)
    
