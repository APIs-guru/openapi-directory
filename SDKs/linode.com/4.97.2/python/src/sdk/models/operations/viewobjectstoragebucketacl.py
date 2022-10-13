from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
VIEW_OBJECT_STORAGE_BUCKET_ACL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class ViewObjectStorageBucketACLPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewObjectStorageBucketACLQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class ViewObjectStorageBucketACLSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ViewObjectStorageBucketACLSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ViewObjectStorageBucketACLSecurity:
    option1: Optional[ViewObjectStorageBucketACLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ViewObjectStorageBucketACLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ViewObjectStorageBucketACLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ViewObjectStorageBucketACLPathParams = field(default=None)
    query_params: ViewObjectStorageBucketACLQueryParams = field(default=None)
    security: ViewObjectStorageBucketACLSecurity = field(default=None)
    
class ViewObjectStorageBucketACL200ApplicationJSONACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    AUTHENTICATED_READ = "authenticated-read"
    PUBLIC_READ_WRITE = "public-read-write"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class ViewObjectStorageBucketACL200ApplicationJSON:
    acl: Optional[ViewObjectStorageBucketACL200ApplicationJSONACLEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl' }})
    acl_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acl_xml' }})
    

@dataclass_json
@dataclass
class ViewObjectStorageBucketACLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ViewObjectStorageBucketACLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    view_object_storage_bucket_acl_200_application_json_object: Optional[ViewObjectStorageBucketACL200ApplicationJSON] = field(default=None)
    view_object_storage_bucket_acl_default_application_json_object: Optional[ViewObjectStorageBucketACLDefaultApplicationJSON] = field(default=None)
    
