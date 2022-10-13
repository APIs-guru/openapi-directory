from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_BUCKETIN_CLUSTER_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketinClusterPathParams:
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketinClusterSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageBucketinClusterSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageBucketinClusterSecurity:
    option1: Optional[GetObjectStorageBucketinClusterSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageBucketinClusterSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageBucketinClusterRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetObjectStorageBucketinClusterPathParams = field(default=None)
    security: GetObjectStorageBucketinClusterSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageBucketinCluster200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketinClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageBucketinClusterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_bucketin_cluster_200_application_json_object: Optional[GetObjectStorageBucketinCluster200ApplicationJSON] = field(default=None)
    get_object_storage_bucketin_cluster_default_application_json_object: Optional[GetObjectStorageBucketinClusterDefaultApplicationJSON] = field(default=None)
    
