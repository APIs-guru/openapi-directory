from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


MODIFY_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class ModifyObjectStorageBucketAccessPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyObjectStorageBucketAccessSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ModifyObjectStorageBucketAccessDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ModifyObjectStorageBucketAccessRequest:
    path_params: ModifyObjectStorageBucketAccessPathParams = field()
    security: ModifyObjectStorageBucketAccessSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ModifyObjectStorageBucketAccessResponse:
    content_type: str = field()
    status_code: int = field()
    modify_object_storage_bucket_access_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    modify_object_storage_bucket_access_default_application_json_object: Optional[ModifyObjectStorageBucketAccessDefaultApplicationJSON] = field(default=None)
    
