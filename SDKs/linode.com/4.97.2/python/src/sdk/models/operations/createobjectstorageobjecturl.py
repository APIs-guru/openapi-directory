from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_OBJECT_STORAGE_OBJECT_URL_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class CreateObjectStorageObjectURLPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateObjectStorageObjectURLSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreateObjectStorageObjectURLDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreateObjectStorageObjectURLRequest:
    path_params: CreateObjectStorageObjectURLPathParams = field()
    security: CreateObjectStorageObjectURLSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateObjectStorageObjectURLResponse:
    content_type: str = field()
    status_code: int = field()
    create_object_storage_object_url_200_application_json_any: Optional[Any] = field(default=None)
    create_object_storage_object_url_default_application_json_object: Optional[CreateObjectStorageObjectURLDefaultApplicationJSON] = field(default=None)
    
