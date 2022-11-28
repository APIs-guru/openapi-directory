from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PatchAPIKeyFromGroupPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'clientId', 'style': 'simple', 'explode': False }})
    group_id: str = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAPIKeyFromGroupSecurity:
    otoroshi_auth: shared.SchemeOtoroshiAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PatchAPIKeyFromGroupRequest:
    path_params: PatchAPIKeyFromGroupPathParams = field()
    security: PatchAPIKeyFromGroupSecurity = field()
    request: Optional[List[shared.Patch]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchAPIKeyFromGroupResponse:
    content_type: str = field()
    status_code: int = field()
    api_key: Optional[shared.APIKey] = field(default=None)
    
