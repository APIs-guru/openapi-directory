from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ServiceGroupPathParams:
    service_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'serviceGroupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ServiceGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ServiceGroupRequest:
    path_params: ServiceGroupPathParams = field(default=None)
    security: ServiceGroupSecurity = field(default=None)
    

@dataclass
class ServiceGroupResponse:
    content_type: str = field(default=None)
    group: Optional[shared.Group] = field(default=None)
    status_code: int = field(default=None)
    
