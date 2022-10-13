from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateClientValidatorPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateClientValidatorRequest:
    path_params: UpdateClientValidatorPathParams = field(default=None)
    request: Optional[shared.ValidationAuthority] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateClientValidatorSecurity = field(default=None)
    

@dataclass
class UpdateClientValidatorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
