from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNodebalancersNodeBalancerIDStatsPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsSecurity:
    option1: Optional[GetNodebalancersNodeBalancerIDStatsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNodebalancersNodeBalancerIDStatsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsRequest:
    path_params: GetNodebalancersNodeBalancerIDStatsPathParams = field(default=None)
    security: GetNodebalancersNodeBalancerIDStatsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsResponse:
    content_type: str = field(default=None)
    get_nodebalancers_node_balancer_id_stats_default_application_json_object: Optional[GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON] = field(default=None)
    node_balancer_stats: Optional[shared.NodeBalancerStats] = field(default=None)
    status_code: int = field(default=None)
    
