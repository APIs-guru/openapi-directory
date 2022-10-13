from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClusterPoolsPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterPoolsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClusterPoolsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClusterPoolsSecurity:
    option1: Optional[GetLkeClusterPoolsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClusterPoolsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClusterPoolsRequest:
    path_params: GetLkeClusterPoolsPathParams = field(default=None)
    security: GetLkeClusterPoolsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeClusterPools200ApplicationJSON:
    data: Optional[List[shared.LkeNodePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLkeClusterPoolsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClusterPoolsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_cluster_pools_200_application_json_object: Optional[GetLkeClusterPools200ApplicationJSON] = field(default=None)
    get_lke_cluster_pools_default_application_json_object: Optional[GetLkeClusterPoolsDefaultApplicationJSON] = field(default=None)
    
