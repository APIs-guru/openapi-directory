from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_KEYS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageKeysSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageKeysSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageKeysSecurity:
    option1: Optional[GetObjectStorageKeysSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageKeysSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageKeysRequest:
    server_url: Optional[str] = field(default=None)
    security: GetObjectStorageKeysSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageKeys200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetObjectStorageKeysDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageKeysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_keys_200_application_json_object: Optional[GetObjectStorageKeys200ApplicationJSON] = field(default=None)
    get_object_storage_keys_default_application_json_object: Optional[GetObjectStorageKeysDefaultApplicationJSON] = field(default=None)
    
