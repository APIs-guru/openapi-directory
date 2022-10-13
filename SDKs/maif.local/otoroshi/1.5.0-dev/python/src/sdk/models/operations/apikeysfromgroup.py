from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class APIKeysFromGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeysFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeysFromGroupRequest:
    path_params: APIKeysFromGroupPathParams = field(default=None)
    security: APIKeysFromGroupSecurity = field(default=None)
    

@dataclass
class APIKeysFromGroupResponse:
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
