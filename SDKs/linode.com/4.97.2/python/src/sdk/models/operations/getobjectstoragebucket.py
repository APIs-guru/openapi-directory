from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_BUCKET_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageBucketRequest:
    path_params: GetObjectStorageBucketPathParams = field()
    security: GetObjectStorageBucketSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageBucketResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_bucket: Optional[shared.ObjectStorageBucket] = field(default=None)
    get_object_storage_bucket_default_application_json_object: Optional[GetObjectStorageBucketDefaultApplicationJSON] = field(default=None)
    
