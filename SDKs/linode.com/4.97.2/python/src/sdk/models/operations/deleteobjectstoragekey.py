from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
DELETE_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteObjectStorageKeyPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteObjectStorageKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteObjectStorageKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteObjectStorageKeySecurity:
    option1: Optional[DeleteObjectStorageKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteObjectStorageKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteObjectStorageKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteObjectStorageKeyPathParams = field(default=None)
    security: DeleteObjectStorageKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteObjectStorageKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_object_storage_key_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_object_storage_key_default_application_json_object: Optional[DeleteObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
