from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateAPIKeyFromGroupPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAPIKeyFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAPIKeyFromGroupRequest:
    path_params: UpdateAPIKeyFromGroupPathParams = field(default=None)
    request: Optional[shared.APIKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateAPIKeyFromGroupSecurity = field(default=None)
    

@dataclass
class UpdateAPIKeyFromGroupResponse:
    api_key: Optional[shared.APIKey] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
