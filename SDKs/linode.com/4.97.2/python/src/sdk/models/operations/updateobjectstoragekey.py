from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


UPDATE_OBJECT_STORAGE_KEY_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class UpdateObjectStorageKeyPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'keyId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageKeyRequestBody:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass
class UpdateObjectStorageKeySecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class UpdateObjectStorageKeyDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateObjectStorageKeyRequest:
    path_params: UpdateObjectStorageKeyPathParams = field()
    security: UpdateObjectStorageKeySecurity = field()
    request: Optional[UpdateObjectStorageKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateObjectStorageKeyResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_key: Optional[shared.ObjectStorageKey] = field(default=None)
    update_object_storage_key_default_application_json_object: Optional[UpdateObjectStorageKeyDefaultApplicationJSON] = field(default=None)
    
