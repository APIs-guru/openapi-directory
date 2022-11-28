from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateServiceGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateServiceGroupRequest:
    security: InitiateServiceGroupSecurity = field()
    

@dataclass
class InitiateServiceGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
