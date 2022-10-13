from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateClientValidatorRequest:
    request: Optional[shared.ValidationAuthority] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateClientValidatorSecurity = field(default=None)
    

@dataclass
class CreateClientValidatorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
