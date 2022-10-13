from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_BUCKET_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageBucketSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageBucketSecurity:
    option1: Optional[GetObjectStorageBucketSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageBucketSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageBucketRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetObjectStorageBucketPathParams = field(default=None)
    security: GetObjectStorageBucketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageBucketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageBucketResponse:
    content_type: str = field(default=None)
    object_storage_bucket: Optional[shared.ObjectStorageBucket] = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_bucket_default_application_json_object: Optional[GetObjectStorageBucketDefaultApplicationJSON] = field(default=None)
    
