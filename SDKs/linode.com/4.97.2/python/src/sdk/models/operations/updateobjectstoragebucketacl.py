from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


UPDATE_OBJECT_STORAGE_BUCKET_ACL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageBucketACLPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateObjectStorageBucketACLSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    
class UpdateObjectStorageBucketACL200ApplicationJSONACLEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC_READ = "public-read"
    AUTHENTICATED_READ = "authenticated-read"
    PUBLIC_READ_WRITE = "public-read-write"
    CUSTOM = "custom"


@dataclass_json
@dataclass
class UpdateObjectStorageBucketACL200ApplicationJSON:
    acl: Optional[UpdateObjectStorageBucketACL200ApplicationJSONACLEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl') }})
    acl_xml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acl_xml') }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageBucketACLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateObjectStorageBucketACLRequest:
    path_params: UpdateObjectStorageBucketACLPathParams = field()
    security: UpdateObjectStorageBucketACLSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateObjectStorageBucketACLResponse:
    content_type: str = field()
    status_code: int = field()
    update_object_storage_bucket_acl_200_application_json_object: Optional[UpdateObjectStorageBucketACL200ApplicationJSON] = field(default=None)
    update_object_storage_bucket_acl_default_application_json_object: Optional[UpdateObjectStorageBucketACLDefaultApplicationJSON] = field(default=None)
    
