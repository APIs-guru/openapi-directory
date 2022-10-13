from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutLkeNodePoolPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutLkeNodePoolSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutLkeNodePoolSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutLkeNodePoolSecurity:
    option1: Optional[PutLkeNodePoolSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutLkeNodePoolSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutLkeNodePoolRequest:
    path_params: PutLkeNodePoolPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutLkeNodePoolSecurity = field(default=None)
    

@dataclass
class PutLkeNodePoolResponse:
    content_type: str = field(default=None)
    lke_node_pool: Optional[shared.LkeNodePool] = field(default=None)
    status_code: int = field(default=None)
    
