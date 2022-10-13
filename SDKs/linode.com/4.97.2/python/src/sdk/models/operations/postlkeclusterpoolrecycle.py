from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostLkeClusterPoolRecyclePathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    pool_id: int = field(default=None, metadata={'path_param': { 'field_name': 'poolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLkeClusterPoolRecycleSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLkeClusterPoolRecycleSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostLkeClusterPoolRecycleSecurity:
    option1: Optional[PostLkeClusterPoolRecycleSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostLkeClusterPoolRecycleSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostLkeClusterPoolRecycleRequest:
    path_params: PostLkeClusterPoolRecyclePathParams = field(default=None)
    security: PostLkeClusterPoolRecycleSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostLkeClusterPoolRecycleDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class PostLkeClusterPoolRecycleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_lke_cluster_pool_recycle_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    post_lke_cluster_pool_recycle_default_application_json_object: Optional[PostLkeClusterPoolRecycleDefaultApplicationJSON] = field(default=None)
    
