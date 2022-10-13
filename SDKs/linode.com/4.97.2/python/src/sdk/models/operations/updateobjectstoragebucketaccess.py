from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
UPDATE_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageBucketAccessPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateObjectStorageBucketAccessSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateObjectStorageBucketAccessSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateObjectStorageBucketAccessSecurity:
    option1: Optional[UpdateObjectStorageBucketAccessSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateObjectStorageBucketAccessSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateObjectStorageBucketAccessRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateObjectStorageBucketAccessPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateObjectStorageBucketAccessSecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateObjectStorageBucketAccessDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateObjectStorageBucketAccessResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_object_storage_bucket_access_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_object_storage_bucket_access_default_application_json_object: Optional[UpdateObjectStorageBucketAccessDefaultApplicationJSON] = field(default=None)
    
