from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FindClientValidatorByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FindClientValidatorByIDSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindClientValidatorByIDRequest:
    path_params: FindClientValidatorByIDPathParams = field(default=None)
    security: FindClientValidatorByIDSecurity = field(default=None)
    

@dataclass
class FindClientValidatorByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
