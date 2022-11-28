from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_TRANSFER_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageTransferSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageTransferRequest:
    security: GetObjectStorageTransferSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageTransferResponse:
    content_type: str = field()
    status_code: int = field()
    get_object_storage_transfer_200_application_json_any: Optional[Any] = field(default=None)
    get_object_storage_transfer_default_application_json_object: Optional[GetObjectStorageTransferDefaultApplicationJSON] = field(default=None)
    
