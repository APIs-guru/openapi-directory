from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_OBJECT_STORAGE_OBJECT_URL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageObjectURLPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateObjectStorageObjectURLSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateObjectStorageObjectURLSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateObjectStorageObjectURLSecurity:
    option1: Optional[CreateObjectStorageObjectURLSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreateObjectStorageObjectURLSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreateObjectStorageObjectURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateObjectStorageObjectURLPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateObjectStorageObjectURLSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreateObjectStorageObjectURLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreateObjectStorageObjectURLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_object_storage_object_url_200_application_json_any: Optional[Any] = field(default=None)
    create_object_storage_object_url_default_application_json_object: Optional[CreateObjectStorageObjectURLDefaultApplicationJSON] = field(default=None)
    
