from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLkeNodePoolPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeNodePoolSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeNodePoolSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeNodePoolSecurity:
    option1: Optional[GetLkeNodePoolSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeNodePoolSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeNodePoolRequest:
    path_params: GetLkeNodePoolPathParams = field(default=None)
    security: GetLkeNodePoolSecurity = field(default=None)
    

@dataclass
class GetLkeNodePoolResponse:
    content_type: str = field(default=None)
    lke_node_pool: Optional[shared.LkeNodePool] = field(default=None)
    status_code: int = field(default=None)
    
