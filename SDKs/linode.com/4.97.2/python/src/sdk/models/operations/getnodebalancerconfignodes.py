from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetNodeBalancerConfigNodesPathParams:
    config_id: int = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerConfigNodesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNodeBalancerConfigNodesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigNodes200ApplicationJSON:
    data: Optional[List[shared.NodeBalancerNode]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigNodesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetNodeBalancerConfigNodesRequest:
    path_params: GetNodeBalancerConfigNodesPathParams = field()
    query_params: GetNodeBalancerConfigNodesQueryParams = field()
    security: GetNodeBalancerConfigNodesSecurity = field()
    

@dataclass
class GetNodeBalancerConfigNodesResponse:
    content_type: str = field()
    status_code: int = field()
    get_node_balancer_config_nodes_200_application_json_object: Optional[GetNodeBalancerConfigNodes200ApplicationJSON] = field(default=None)
    get_node_balancer_config_nodes_default_application_json_object: Optional[GetNodeBalancerConfigNodesDefaultApplicationJSON] = field(default=None)
    
