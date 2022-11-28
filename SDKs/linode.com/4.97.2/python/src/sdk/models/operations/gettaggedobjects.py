from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTaggedObjectsPathParams:
    label: str = field(metadata={'path_param': { 'field_name': 'label', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedObjectsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaggedObjectsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetTaggedObjectsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetTaggedObjectsRequest:
    path_params: GetTaggedObjectsPathParams = field()
    query_params: GetTaggedObjectsQueryParams = field()
    security: GetTaggedObjectsSecurity = field()
    

@dataclass
class GetTaggedObjectsResponse:
    content_type: str = field()
    status_code: int = field()
    get_tagged_objects_200_application_json_any: Optional[Any] = field(default=None)
    get_tagged_objects_default_application_json_object: Optional[GetTaggedObjectsDefaultApplicationJSON] = field(default=None)
    
