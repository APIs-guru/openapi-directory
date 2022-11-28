from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostLkeClusterRecyclePathParams:
    cluster_id: int = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLkeClusterRecycleSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostLkeClusterRecycleDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class PostLkeClusterRecycleRequest:
    path_params: PostLkeClusterRecyclePathParams = field()
    security: PostLkeClusterRecycleSecurity = field()
    

@dataclass
class PostLkeClusterRecycleResponse:
    content_type: str = field()
    status_code: int = field()
    post_lke_cluster_recycle_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    post_lke_cluster_recycle_default_application_json_object: Optional[PostLkeClusterRecycleDefaultApplicationJSON] = field(default=None)
    
