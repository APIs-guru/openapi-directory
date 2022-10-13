from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostLkeClusterRecyclePathParams:
    cluster_id: int = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostLkeClusterRecycleSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostLkeClusterRecycleSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostLkeClusterRecycleSecurity:
    option1: Optional[PostLkeClusterRecycleSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostLkeClusterRecycleSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostLkeClusterRecycleRequest:
    path_params: PostLkeClusterRecyclePathParams = field(default=None)
    security: PostLkeClusterRecycleSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostLkeClusterRecycleDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class PostLkeClusterRecycleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_lke_cluster_recycle_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    post_lke_cluster_recycle_default_application_json_object: Optional[PostLkeClusterRecycleDefaultApplicationJSON] = field(default=None)
    
