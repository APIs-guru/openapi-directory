from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostLkeClusterNodeRecyclePathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLkeClusterNodeRecycleSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLkeClusterNodeRecycleSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostLkeClusterNodeRecycleSecurity:
    option1: Optional[PostLkeClusterNodeRecycleSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostLkeClusterNodeRecycleSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostLkeClusterNodeRecycleRequest:
    path_params: PostLkeClusterNodeRecyclePathParams = field(default=None)
    security: PostLkeClusterNodeRecycleSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostLkeClusterNodeRecycleDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class PostLkeClusterNodeRecycleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_lke_cluster_node_recycle_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    post_lke_cluster_node_recycle_default_application_json_object: Optional[PostLkeClusterNodeRecycleDefaultApplicationJSON] = field(default=None)
    
