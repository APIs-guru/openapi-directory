from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetNodeBalancerConfigsPathParams:
    node_balancer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'nodeBalancerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeBalancerConfigsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNodeBalancerConfigsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetNodeBalancerConfigsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetNodeBalancerConfigsSecurity:
    option1: Optional[GetNodeBalancerConfigsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetNodeBalancerConfigsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetNodeBalancerConfigsRequest:
    path_params: GetNodeBalancerConfigsPathParams = field(default=None)
    query_params: GetNodeBalancerConfigsQueryParams = field(default=None)
    security: GetNodeBalancerConfigsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigs200ApplicationJSON:
    data: Optional[List[shared.NodeBalancerConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetNodeBalancerConfigsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetNodeBalancerConfigsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_node_balancer_configs_200_application_json_object: Optional[GetNodeBalancerConfigs200ApplicationJSON] = field(default=None)
    get_node_balancer_configs_default_application_json_object: Optional[GetNodeBalancerConfigsDefaultApplicationJSON] = field(default=None)
    
