from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


DELETE_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteObjectStorageKeyPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteObjectStorageKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class DeleteObjectStorageKeyRequest:
    path_params: DeleteObjectStorageKeyPathParams = field()
    security: DeleteObjectStorageKeySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteObjectStorageKeyResponse:
    content_type: str = field()
    status_code: int = field()
    delete_object_storage_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_object_storage_key_default_application_json_object: Optional[DeleteObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
