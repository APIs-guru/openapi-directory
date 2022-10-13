from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
MODIFY_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class ModifyObjectStorageBucketAccessPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyObjectStorageBucketAccessSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ModifyObjectStorageBucketAccessSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ModifyObjectStorageBucketAccessSecurity:
    option1: Optional[ModifyObjectStorageBucketAccessSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ModifyObjectStorageBucketAccessSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ModifyObjectStorageBucketAccessRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ModifyObjectStorageBucketAccessPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ModifyObjectStorageBucketAccessSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ModifyObjectStorageBucketAccessDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ModifyObjectStorageBucketAccessResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    modify_object_storage_bucket_access_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    modify_object_storage_bucket_access_default_application_json_object: Optional[ModifyObjectStorageBucketAccessDefaultApplicationJSON] = field(default=None)
    
