from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FindAllClientValidatorsSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FindAllClientValidatorsRequest:
    security: FindAllClientValidatorsSecurity = field()
    

@dataclass
class FindAllClientValidatorsResponse:
    content_type: str = field()
    status_code: int = field()
    validation_authorities: Optional[List[shared.ValidationAuthority]] = field(default=None)
    
