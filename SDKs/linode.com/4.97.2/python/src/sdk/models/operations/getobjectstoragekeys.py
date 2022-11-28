from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_KEYS_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageKeysSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageKeys200ApplicationJSON:
    data: Optional[List[shared.ObjectStorageKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetObjectStorageKeysDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageKeysRequest:
    security: GetObjectStorageKeysSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageKeysResponse:
    content_type: str = field()
    status_code: int = field()
    get_object_storage_keys_200_application_json_object: Optional[GetObjectStorageKeys200ApplicationJSON] = field(default=None)
    get_object_storage_keys_default_application_json_object: Optional[GetObjectStorageKeysDefaultApplicationJSON] = field(default=None)
    
