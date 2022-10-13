from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
DELETE_OBJECT_STORAGE_SSL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class DeleteObjectStorageSslPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteObjectStorageSslSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteObjectStorageSslSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteObjectStorageSslSecurity:
    option1: Optional[DeleteObjectStorageSslSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteObjectStorageSslSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteObjectStorageSslRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteObjectStorageSslPathParams = field(default=None)
    security: DeleteObjectStorageSslSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteObjectStorageSslDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class DeleteObjectStorageSslResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_object_storage_ssl_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    delete_object_storage_ssl_default_application_json_object: Optional[DeleteObjectStorageSslDefaultApplicationJSON] = field(default=None)
    
