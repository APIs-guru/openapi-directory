from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchGroupPathParams:
    service_group_id: str = field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchGroupRequest:
    path_params: PatchGroupPathParams = field()
    security: PatchGroupSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
