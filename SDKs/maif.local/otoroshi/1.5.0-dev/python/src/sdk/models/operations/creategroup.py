from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateGroupRequest:
    security: CreateGroupSecurity = field()
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
