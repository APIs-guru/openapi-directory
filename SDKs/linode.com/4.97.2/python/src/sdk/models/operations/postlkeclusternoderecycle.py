from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostLkeClusterNodeRecyclePathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLkeClusterNodeRecycleSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostLkeClusterNodeRecycleDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostLkeClusterNodeRecycleRequest:
    path_params: PostLkeClusterNodeRecyclePathParams = field()
    security: PostLkeClusterNodeRecycleSecurity = field()
    

@dataclass
class PostLkeClusterNodeRecycleResponse:
    content_type: str = field()
    status_code: int = field()
    post_lke_cluster_node_recycle_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    post_lke_cluster_node_recycle_default_application_json_object: Optional[PostLkeClusterNodeRecycleDefaultApplicationJSON] = field(default=None)
    
