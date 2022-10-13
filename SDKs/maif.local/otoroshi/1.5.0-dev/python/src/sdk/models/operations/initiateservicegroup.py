from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateServiceGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class InitiateServiceGroupRequest:
    security: InitiateServiceGroupSecurity = field(default=None)
    

@dataclass
class InitiateServiceGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
