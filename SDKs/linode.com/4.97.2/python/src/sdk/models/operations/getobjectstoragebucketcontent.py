from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_OBJECT_STORAGE_BUCKET_CONTENT_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketContentPathParams:
    bucket: str = field(metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketContentQueryParams:
    delimiter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delimiter', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'marker', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetObjectStorageBucketContentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetObjectStorageBucketContentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetObjectStorageBucketContentRequest:
    path_params: GetObjectStorageBucketContentPathParams = field()
    query_params: GetObjectStorageBucketContentQueryParams = field()
    security: GetObjectStorageBucketContentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetObjectStorageBucketContentResponse:
    content_type: str = field()
    status_code: int = field()
    get_object_storage_bucket_content_200_application_json_any: Optional[Any] = field(default=None)
    get_object_storage_bucket_content_default_application_json_object: Optional[GetObjectStorageBucketContentDefaultApplicationJSON] = field(default=None)
    
