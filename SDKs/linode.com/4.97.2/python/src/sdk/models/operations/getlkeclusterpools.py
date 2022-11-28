from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeClusterPoolsPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterPoolsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLkeClusterPools200ApplicationJSON:
    data: Optional[List[shared.LkeNodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetLkeClusterPoolsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeClusterPoolsRequest:
    path_params: GetLkeClusterPoolsPathParams = field()
    security: GetLkeClusterPoolsSecurity = field()
    

@dataclass
class GetLkeClusterPoolsResponse:
    content_type: str = field()
    status_code: int = field()
    get_lke_cluster_pools_200_application_json_object: Optional[GetLkeClusterPools200ApplicationJSON] = field(default=None)
    get_lke_cluster_pools_default_application_json_object: Optional[GetLkeClusterPoolsDefaultApplicationJSON] = field(default=None)
    
