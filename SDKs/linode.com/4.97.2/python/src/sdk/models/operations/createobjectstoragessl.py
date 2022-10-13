from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_OBJECT_STORAGE_SSL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageSslPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateObjectStorageSslSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateObjectStorageSslSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateObjectStorageSslSecurity:
    option1: Optional[CreateObjectStorageSslSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateObjectStorageSslSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateObjectStorageSslRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateObjectStorageSslPathParams = field(default=None)
    request: Optional[shared.ObjectStorageSsl] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateObjectStorageSslSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateObjectStorageSslDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateObjectStorageSslResponse:
    content_type: str = field(default=None)
    object_storage_ssl_response: Optional[shared.ObjectStorageSslResponse] = field(default=None)
    status_code: int = field(default=None)
    create_object_storage_ssl_default_application_json_object: Optional[CreateObjectStorageSslDefaultApplicationJSON] = field(default=None)
    
