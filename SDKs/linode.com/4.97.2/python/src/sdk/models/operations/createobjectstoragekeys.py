from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_OBJECT_STORAGE_KEYS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageKeysSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateObjectStorageKeysSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateObjectStorageKeysSecurity:
    option1: Optional[CreateObjectStorageKeysSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateObjectStorageKeysSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateObjectStorageKeysRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[shared.ObjectStorageKey] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateObjectStorageKeysSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateObjectStorageKeysDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateObjectStorageKeysResponse:
    content_type: str = field(default=None)
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    status_code: int = field(default=None)
    create_object_storage_keys_default_application_json_object: Optional[CreateObjectStorageKeysDefaultApplicationJSON] = field(default=None)
    
