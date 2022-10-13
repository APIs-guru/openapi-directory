from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGroupRequest:
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateGroupSecurity = field(default=None)
    

@dataclass
class CreateGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
