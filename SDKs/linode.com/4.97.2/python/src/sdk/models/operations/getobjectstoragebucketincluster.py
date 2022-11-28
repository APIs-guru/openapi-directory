from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_BUCKETIN_CLUSTER_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketinClusterPathParams:
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketinClusterSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketinCluster200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketinClusterDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageBucketinClusterRequest:
    path_params: GetObjectStorageBucketinClusterPathParams = field()
    security: GetObjectStorageBucketinClusterSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageBucketinClusterResponse:
    content_type: str = field()
    status_code: int = field()
    get_object_storage_bucketin_cluster_200_application_json_object: Optional[GetObjectStorageBucketinCluster200ApplicationJSON] = field(default=None)
    get_object_storage_bucketin_cluster_default_application_json_object: Optional[GetObjectStorageBucketinClusterDefaultApplicationJSON] = field(default=None)
    
