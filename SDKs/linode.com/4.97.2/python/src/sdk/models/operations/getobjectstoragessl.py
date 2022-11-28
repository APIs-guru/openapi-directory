from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_SSL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageSslPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageSslSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageSslDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageSslRequest:
    path_params: GetObjectStorageSslPathParams = field()
    security: GetObjectStorageSslSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageSslResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_ssl_response: Optional[shared.ObjectStorageSslResponse] = field(default=None)
    get_object_storage_ssl_default_application_json_object: Optional[GetObjectStorageSslDefaultApplicationJSON] = field(default=None)
    
