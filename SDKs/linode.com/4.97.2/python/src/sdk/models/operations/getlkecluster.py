from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLkeClusterPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLkeClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLkeClusterRequest:
    path_params: GetLkeClusterPathParams = field()
    security: GetLkeClusterSecurity = field()
    

@dataclass
class GetLkeClusterResponse:
    content_type: str = field()
    status_code: int = field()
    lke_cluster: Optional[shared.LkeCluster] = field(default=None)
    get_lke_cluster_default_application_json_object: Optional[GetLkeClusterDefaultApplicationJSON] = field(default=None)
    
