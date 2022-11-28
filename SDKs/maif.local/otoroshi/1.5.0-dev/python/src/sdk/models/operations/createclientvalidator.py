from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateClientValidatorRequest:
    security: CreateClientValidatorSecurity = field()
    request: Optional[shared.ValidationAuthority] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateClientValidatorResponse:
    content_type: str = field()
    status_code: int = field()
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
