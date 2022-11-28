from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetNodeBalancerConfigsPathParams:
    node_balancer_id: int = field(metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerConfigsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNodeBalancerConfigsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigs200ApplicationJSON:
    data: Optional[List[shared.NodeBalancerConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetNodeBalancerConfigsRequest:
    path_params: GetNodeBalancerConfigsPathParams = field()
    query_params: GetNodeBalancerConfigsQueryParams = field()
    security: GetNodeBalancerConfigsSecurity = field()
    

@dataclass
class GetNodeBalancerConfigsResponse:
    content_type: str = field()
    status_code: int = field()
    get_node_balancer_configs_200_application_json_object: Optional[GetNodeBalancerConfigs200ApplicationJSON] = field(default=None)
    get_node_balancer_configs_default_application_json_object: Optional[GetNodeBalancerConfigsDefaultApplicationJSON] = field(default=None)
    
