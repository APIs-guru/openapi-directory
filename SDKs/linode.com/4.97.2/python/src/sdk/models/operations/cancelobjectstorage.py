from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CANCEL_OBJECT_STORAGE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CancelObjectStorageSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CancelObjectStorageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CancelObjectStorageRequest:
    security: CancelObjectStorageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CancelObjectStorageResponse:
    content_type: str = field()
    status_code: int = field()
    cancel_object_storage_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    cancel_object_storage_default_application_json_object: Optional[CancelObjectStorageDefaultApplicationJSON] = field(default=None)
    
