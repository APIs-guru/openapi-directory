from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageKeyPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageKeyRequest:
    path_params: GetObjectStorageKeyPathParams = field()
    security: GetObjectStorageKeySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageKeyResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    get_object_storage_key_default_application_json_object: Optional[GetObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
