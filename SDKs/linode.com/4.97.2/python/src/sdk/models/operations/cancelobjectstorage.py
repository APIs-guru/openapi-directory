from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CANCEL_OBJECT_STORAGE_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CancelObjectStorageSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CancelObjectStorageSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelObjectStorageSecurity:
    option1: Optional[CancelObjectStorageSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CancelObjectStorageSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CancelObjectStorageRequest:
    server_url: Optional[str] = field(default=None)
    security: CancelObjectStorageSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CancelObjectStorageDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CancelObjectStorageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cancel_object_storage_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    cancel_object_storage_default_application_json_object: Optional[CancelObjectStorageDefaultApplicationJSON] = field(default=None)
    
