from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostLkeClusterPoolsPathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLkeClusterPoolsRequestBody:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    disks: Optional[List[shared.Items]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostLkeClusterPoolsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLkeClusterPoolsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostLkeClusterPoolsSecurity:
    option1: Optional[PostLkeClusterPoolsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostLkeClusterPoolsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostLkeClusterPoolsRequest:
    path_params: PostLkeClusterPoolsPathParams = field(default=None)
    request: PostLkeClusterPoolsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostLkeClusterPoolsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostLkeClusterPoolsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class PostLkeClusterPoolsResponse:
    content_type: str = field(default=None)
    lke_node_pool: Optional[shared.LkeNodePool] = field(default=None)
    status_code: int = field(default=None)
    post_lke_cluster_pools_default_application_json_object: Optional[PostLkeClusterPoolsDefaultApplicationJSON] = field(default=None)
    
