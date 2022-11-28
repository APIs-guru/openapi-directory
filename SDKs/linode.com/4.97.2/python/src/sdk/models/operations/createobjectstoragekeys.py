from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_OBJECT_STORAGE_KEYS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageKeysSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateObjectStorageKeysDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateObjectStorageKeysRequest:
    security: CreateObjectStorageKeysSecurity = field()
    request: Optional[shared.ObjectStorageKeyInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateObjectStorageKeysResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    create_object_storage_keys_default_application_json_object: Optional[CreateObjectStorageKeysDefaultApplicationJSON] = field(default=None)
    
