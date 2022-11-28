from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIKeyGroupPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeyGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeyGroupRequest:
    path_params: APIKeyGroupPathParams = field()
    security: APIKeyGroupSecurity = field()
    

@dataclass
class APIKeyGroupResponse:
    content_type: str = field()
    status_code: int = field()
    group: Optional[shared.Group] = field(default=None)
    
