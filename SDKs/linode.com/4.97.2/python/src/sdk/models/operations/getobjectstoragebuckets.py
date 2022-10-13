from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_BUCKETS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageBucketsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageBucketsSecurity:
    option1: Optional[GetObjectStorageBucketsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageBucketsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageBucketsRequest:
    server_url: Optional[str] = field(default=None)
    security: GetObjectStorageBucketsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageBuckets200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageBucketsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_buckets_200_application_json_object: Optional[GetObjectStorageBuckets200ApplicationJSON] = field(default=None)
    get_object_storage_buckets_default_application_json_object: Optional[GetObjectStorageBucketsDefaultApplicationJSON] = field(default=None)
    
