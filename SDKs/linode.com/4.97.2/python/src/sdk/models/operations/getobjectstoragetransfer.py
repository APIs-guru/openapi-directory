from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_TRANSFER_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageTransferSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageTransferSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageTransferSecurity:
    option1: Optional[GetObjectStorageTransferSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageTransferSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageTransferRequest:
    server_url: Optional[str] = field(default=None)
    security: GetObjectStorageTransferSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageTransferDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageTransferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_transfer_200_application_json_any: Optional[Any] = field(default=None)
    get_object_storage_transfer_default_application_json_object: Optional[GetObjectStorageTransferDefaultApplicationJSON] = field(default=None)
    
