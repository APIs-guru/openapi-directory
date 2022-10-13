from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllClientValidatorsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllClientValidatorsRequest:
    security: FindAllClientValidatorsSecurity = field(default=None)
    

@dataclass
class FindAllClientValidatorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_authorities: Optional[List[shared.ValidationAuthority]] = field(default=None)
    
