from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchClientValidatorPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchClientValidatorSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchClientValidatorRequest:
    path_params: PatchClientValidatorPathParams = field(default=None)
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PatchClientValidatorSecurity = field(default=None)
    

@dataclass
class PatchClientValidatorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_authority: Optional[shared.ValidationAuthority] = field(default=None)
    
