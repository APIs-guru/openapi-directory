from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClusterPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLkeClusterSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClusterSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClusterSecurity:
    option1: Optional[GetLkeClusterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClusterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClusterRequest:
    path_params: GetLkeClusterPathParams = field(default=None)
    security: GetLkeClusterSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClusterResponse:
    content_type: str = field(default=None)
    lke_cluster: Optional[shared.LkeCluster] = field(default=None)
    status_code: int = field(default=None)
    get_lke_cluster_default_application_json_object: Optional[GetLkeClusterDefaultApplicationJSON] = field(default=None)
    
