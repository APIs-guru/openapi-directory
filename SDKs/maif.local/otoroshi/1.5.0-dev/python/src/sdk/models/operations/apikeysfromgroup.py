from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class APIKeysFromGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIKeysFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class APIKeysFromGroupRequest:
    path_params: APIKeysFromGroupPathParams = field()
    security: APIKeysFromGroupSecurity = field()
    

@dataclass
class APIKeysFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_keys: Optional[List[shared.APIKey]] = field(default=None)
    
