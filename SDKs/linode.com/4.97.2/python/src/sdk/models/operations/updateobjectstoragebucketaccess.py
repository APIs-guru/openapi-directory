from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


UPDATE_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageBucketAccessPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateObjectStorageBucketAccessSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageBucketAccessDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateObjectStorageBucketAccessRequest:
    path_params: UpdateObjectStorageBucketAccessPathParams = field()
    security: UpdateObjectStorageBucketAccessSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateObjectStorageBucketAccessResponse:
    content_type: str = field()
    status_code: int = field()
    update_object_storage_bucket_access_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    update_object_storage_bucket_access_default_application_json_object: Optional[UpdateObjectStorageBucketAccessDefaultApplicationJSON] = field(default=None)
    
