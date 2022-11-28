from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteGroupPathParams:
    service_group_id: str = field(metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteGroupRequest:
    path_params: DeleteGroupPathParams = field()
    security: DeleteGroupSecurity = field()
    

@dataclass
class DeleteGroupResponse:
    content_type: str = field()
    status_code: int = field()
    deleted: Optional[shared.Deleted] = field(default=None)
    
