from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
UPDATE_OBJECT_STORAGE_BUCKET_ACL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageBucketACLPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateObjectStorageBucketACLSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateObjectStorageBucketACLSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateObjectStorageBucketACLSecurity:
    option1: Optional[UpdateObjectStorageBucketACLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateObjectStorageBucketACLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateObjectStorageBucketACLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateObjectStorageBucketACLPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateObjectStorageBucketACLSecurity = field(default=None)
    
class UpdateObjectStorageBucketACL200ApplicationJSONACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    AUTHENTICATED_READ = "authenticated-read"
    PUBLIC_READ_WRITE = "public-read-write"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateObjectStorageBucketACL200ApplicationJSON:
    acl: Optional[UpdateObjectStorageBucketACL200ApplicationJSONACLEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    acl_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl_xml' }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageBucketACLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateObjectStorageBucketACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_object_storage_bucket_acl_200_application_json_object: Optional[UpdateObjectStorageBucketACL200ApplicationJSON] = field(default=None)
    update_object_storage_bucket_acl_default_application_json_object: Optional[UpdateObjectStorageBucketACLDefaultApplicationJSON] = field(default=None)
    
