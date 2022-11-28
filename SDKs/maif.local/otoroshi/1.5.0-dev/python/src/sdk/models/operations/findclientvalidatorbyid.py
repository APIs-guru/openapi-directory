from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindClientValidatorByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindClientValidatorByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindClientValidatorByIDRequest:
    path_params: FindClientValidatorByIDPathParams = field()
    security: FindClientValidatorByIDSecurity = field()
    

@dataclass
class FindClientValidatorByIDResponse:
    content_type: str = field()
    status_code: int = field()
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
