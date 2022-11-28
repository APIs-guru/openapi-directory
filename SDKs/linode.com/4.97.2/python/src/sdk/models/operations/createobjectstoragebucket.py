from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_OBJECT_STORAGE_BUCKET_SERVERS = [
	"https://api.linode.com/v4",
]

class CreateObjectStorageBucketRequestBodyACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    AUTHENTICATED_READ = "authenticated-read"
    PUBLIC_READ_WRITE = "public-read-write"


@dataclass_json
@dataclass
class CreateObjectStorageBucketRequestBody:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    acl: Optional[CreateObjectStorageBucketRequestBodyACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    cors_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors_enabled') }})
    

@dataclass
class CreateObjectStorageBucketSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateObjectStorageBucketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateObjectStorageBucketRequest:
    security: CreateObjectStorageBucketSecurity = field()
    request: Optional[CreateObjectStorageBucketRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateObjectStorageBucketResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_bucket: Optional[shared.ObjectStorageBucket] = field(default=None)
    create_object_storage_bucket_default_application_json_object: Optional[CreateObjectStorageBucketDefaultApplicationJSON] = field(default=None)
    
