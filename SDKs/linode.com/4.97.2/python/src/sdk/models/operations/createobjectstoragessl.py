from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_OBJECT_STORAGE_SSL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageSslPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateObjectStorageSslSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateObjectStorageSslDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateObjectStorageSslRequest:
    path_params: CreateObjectStorageSslPathParams = field()
    security: CreateObjectStorageSslSecurity = field()
    request: Optional[shared.ObjectStorageSsl] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateObjectStorageSslResponse:
    content_type: str = field()
    status_code: int = field()
    object_storage_ssl_response: Optional[shared.ObjectStorageSslResponse] = field(default=None)
    create_object_storage_ssl_default_application_json_object: Optional[CreateObjectStorageSslDefaultApplicationJSON] = field(default=None)
    
