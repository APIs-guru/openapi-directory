from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClusterAPIEndpointsPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterAPIEndpointsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClusterAPIEndpointsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClusterAPIEndpointsSecurity:
    option1: Optional[GetLkeClusterAPIEndpointsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClusterAPIEndpointsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClusterAPIEndpointsRequest:
    path_params: GetLkeClusterAPIEndpointsPathParams = field(default=None)
    security: GetLkeClusterAPIEndpointsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpoints200ApplicationJSONData:
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpoints200ApplicationJSON:
    data: Optional[List[GetLkeClusterAPIEndpoints200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpointsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClusterAPIEndpointsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_cluster_api_endpoints_200_application_json_object: Optional[GetLkeClusterAPIEndpoints200ApplicationJSON] = field(default=None)
    get_lke_cluster_api_endpoints_default_application_json_object: Optional[GetLkeClusterAPIEndpointsDefaultApplicationJSON] = field(default=None)
    
