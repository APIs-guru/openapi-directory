from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
UPDATE_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageKeyPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageKeyRequestBody:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass
class UpdateObjectStorageKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateObjectStorageKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateObjectStorageKeySecurity:
    option1: Optional[UpdateObjectStorageKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[UpdateObjectStorageKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class UpdateObjectStorageKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateObjectStorageKeyPathParams = field(default=None)
    request: Optional[UpdateObjectStorageKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateObjectStorageKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class UpdateObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class UpdateObjectStorageKeyResponse:
    content_type: str = field(default=None)
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    status_code: int = field(default=None)
    update_object_storage_key_default_application_json_object: Optional[UpdateObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
