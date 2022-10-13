from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTaggedObjectsPathParams:
    label: str = field(default=None, metadata={'path_param': { 'field_name': 'label', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaggedObjectsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTaggedObjectsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaggedObjectsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTaggedObjectsSecurity:
    option1: Optional[GetTaggedObjectsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTaggedObjectsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTaggedObjectsRequest:
    path_params: GetTaggedObjectsPathParams = field(default=None)
    query_params: GetTaggedObjectsQueryParams = field(default=None)
    security: GetTaggedObjectsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTaggedObjectsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTaggedObjectsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_tagged_objects_200_application_json_any: Optional[Any] = field(default=None)
    get_tagged_objects_default_application_json_object: Optional[GetTaggedObjectsDefaultApplicationJSON] = field(default=None)
    
