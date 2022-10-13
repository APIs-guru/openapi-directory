from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageKeyPathParams:
    key_id: int = field(default=None, metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageKeySecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageKeySecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageKeySecurity:
    option1: Optional[GetObjectStorageKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetObjectStorageKeyPathParams = field(default=None)
    security: GetObjectStorageKeySecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageKeyResponse:
    content_type: str = field(default=None)
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_key_default_application_json_object: Optional[GetObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
