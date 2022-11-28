from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLkeNodePoolPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeNodePoolSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeNodePoolRequest:
    path_params: GetLkeNodePoolPathParams = field()
    security: GetLkeNodePoolSecurity = field()
    

@dataclass
class GetLkeNodePoolResponse:
    content_type: str = field()
    status_code: int = field()
    lke_node_pool: Optional[shared.LkeNodePool] = field(default=None)
    
