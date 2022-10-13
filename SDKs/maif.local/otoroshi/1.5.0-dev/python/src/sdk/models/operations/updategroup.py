from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateGroupPathParams:
    service_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateGroupRequest:
    path_params: UpdateGroupPathParams = field(default=None)
    request: Optional[shared.Group] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateGroupSecurity = field(default=None)
    

@dataclass
class UpdateGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
