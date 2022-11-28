from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAPIKeyFromGroupPathParams:
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAPIKeyFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAPIKeyFromGroupRequest:
    path_params: CreateAPIKeyFromGroupPathParams = field()
    security: CreateAPIKeyFromGroupSecurity = field()
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAPIKeyFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
