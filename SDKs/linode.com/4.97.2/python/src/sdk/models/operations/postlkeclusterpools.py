from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostLkeClusterPoolsPathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostLkeClusterPoolsRequestBody:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    disks: Optional[List[shared.Items]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class PostLkeClusterPoolsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostLkeClusterPoolsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostLkeClusterPoolsRequest:
    path_params: PostLkeClusterPoolsPathParams = field()
    request: PostLkeClusterPoolsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostLkeClusterPoolsSecurity = field()
    

@dataclass
class PostLkeClusterPoolsResponse:
    content_type: str = field()
    status_code: int = field()
    lke_node_pool: Optional[shared.LkeNodePool] = field(default=None)
    post_lke_cluster_pools_default_application_json_object: Optional[PostLkeClusterPoolsDefaultApplicationJSON] = field(default=None)
    
