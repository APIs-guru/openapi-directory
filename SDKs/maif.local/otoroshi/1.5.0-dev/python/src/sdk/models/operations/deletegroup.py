from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGroupPathParams:
    service_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = field(default=None)
    security: DeleteGroupSecurity = field(default=None)
    

@dataclass
class DeleteGroupResponse:
    content_type: str = field(default=None)
    deleted: Optional[shared.Deleted] = field(default=None)
    status_code: int = field(default=None)
    
