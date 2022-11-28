from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetNodebalancersNodeBalancerIDStatsPathParams:
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsRequest:
    path_params: GetNodebalancersNodeBalancerIDStatsPathParams = field()
    security: GetNodebalancersNodeBalancerIDStatsSecurity = field()
    

@dataclass
class GetNodebalancersNodeBalancerIDStatsResponse:
    content_type: str = field()
    status_code: int = field()
    get_nodebalancers_node_balancer_id_stats_default_application_json_object: Optional[GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON] = field(default=None)
    node_balancer_stats: Optional[shared.NodeBalancerStats] = field(default=None)
    
