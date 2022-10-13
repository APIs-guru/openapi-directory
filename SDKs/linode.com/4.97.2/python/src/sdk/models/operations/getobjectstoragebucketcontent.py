from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_OBJECT_STORAGE_BUCKET_CONTENT_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass
class GetObjectStorageBucketContentPathParams:
    bucket: str = field(default=None, metadata={'path_param': { 'field_name': 'bucket', 'style': 'simple', 'explode': False }})
    cluster_id: str = field(default=None, metadata={'path_param': { 'field_name': 'clusterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetObjectStorageBucketContentQueryParams:
    delimiter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'delimiter', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'marker', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    prefix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    

@dataclass
class GetObjectStorageBucketContentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetObjectStorageBucketContentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetObjectStorageBucketContentSecurity:
    option1: Optional[GetObjectStorageBucketContentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetObjectStorageBucketContentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetObjectStorageBucketContentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetObjectStorageBucketContentPathParams = field(default=None)
    query_params: GetObjectStorageBucketContentQueryParams = field(default=None)
    security: GetObjectStorageBucketContentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetObjectStorageBucketContentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetObjectStorageBucketContentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_object_storage_bucket_content_200_application_json_any: Optional[Any] = field(default=None)
    get_object_storage_bucket_content_default_application_json_object: Optional[GetObjectStorageBucketContentDefaultApplicationJSON] = field(default=None)
    
