from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


VIEW_OBJECT_STORAGE_BUCKET_ACL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class ViewObjectStorageBucketACLPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewObjectStorageBucketACLQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class ViewObjectStorageBucketACLSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
class ViewObjectStorageBucketACL200ApplicationJSONACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    AUTHENTICATED_READ = "authenticated-read"
    PUBLIC_READ_WRITE = "public-read-write"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class ViewObjectStorageBucketACL200ApplicationJSON:
    acl: Optional[ViewObjectStorageBucketACL200ApplicationJSONACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    acl_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl_xml') }})
    

@dataclass_json
@dataclass
class ViewObjectStorageBucketACLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ViewObjectStorageBucketACLRequest:
    path_params: ViewObjectStorageBucketACLPathParams = field()
    query_params: ViewObjectStorageBucketACLQueryParams = field()
    security: ViewObjectStorageBucketACLSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ViewObjectStorageBucketACLResponse:
    content_type: str = field()
    status_code: int = field()
    view_object_storage_bucket_acl_200_application_json_object: Optional[ViewObjectStorageBucketACL200ApplicationJSON] = field(default=None)
    view_object_storage_bucket_acl_default_application_json_object: Optional[ViewObjectStorageBucketACLDefaultApplicationJSON] = field(default=None)
    
