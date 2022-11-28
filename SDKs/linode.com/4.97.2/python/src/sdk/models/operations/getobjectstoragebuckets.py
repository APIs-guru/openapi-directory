from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_BUCKETS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBuckets200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageBucketsRequest:
    security: GetObjectStorageBucketsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageBucketsResponse:
    content_type: str = field()
    status_code: int = field()
    get_object_storage_buckets_200_application_json_object: Optional[GetObjectStorageBuckets200ApplicationJSON] = field(default=None)
    get_object_storage_buckets_default_application_json_object: Optional[GetObjectStorageBucketsDefaultApplicationJSON] = field(default=None)
    
