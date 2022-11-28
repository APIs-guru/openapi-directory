from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeClusterAPIEndpointsPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterAPIEndpointsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpoints200ApplicationJSONData:
    r"""GetLkeClusterAPIEndpoints200ApplicationJSONData
    The Kubernetes API server endpoints for this cluster.
    
    """
    
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpoints200ApplicationJSON:
    data: Optional[List[GetLkeClusterAPIEndpoints200ApplicationJSONData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetLkeClusterAPIEndpointsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeClusterAPIEndpointsRequest:
    path_params: GetLkeClusterAPIEndpointsPathParams = field()
    security: GetLkeClusterAPIEndpointsSecurity = field()
    

@dataclass
class GetLkeClusterAPIEndpointsResponse:
    content_type: str = field()
    status_code: int = field()
    get_lke_cluster_api_endpoints_200_application_json_object: Optional[GetLkeClusterAPIEndpoints200ApplicationJSON] = field(default=None)
    get_lke_cluster_api_endpoints_default_application_json_object: Optional[GetLkeClusterAPIEndpointsDefaultApplicationJSON] = field(default=None)
    
