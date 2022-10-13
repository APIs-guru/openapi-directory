from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    acl: Optional[CreateObjectStorageBucketRequestBodyACLEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    cors_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors_enabled' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass
class CreateObjectStorageBucketSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateObjectStorageBucketSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateObjectStorageBucketSecurity:
    option1: Optional[CreateObjectStorageBucketSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateObjectStorageBucketSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateObjectStorageBucketRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateObjectStorageBucketRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateObjectStorageBucketSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateObjectStorageBucketDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateObjectStorageBucketResponse:
    content_type: str = field(default=None)
    object_storage_bucket: Optional[shared.ObjectStorageBucket] = field(default=None)
    status_code: int = field(default=None)
    create_object_storage_bucket_default_application_json_object: Optional[CreateObjectStorageBucketDefaultApplicationJSON] = field(default=None)
    
