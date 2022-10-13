from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTagsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTagsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTagsSecurity:
    option1: Optional[GetTagsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTagsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTagsRequest:
    query_params: GetTagsQueryParams = field(default=None)
    security: GetTagsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetTags200ApplicationJSON:
    data: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetTagsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_tags_200_application_json_object: Optional[GetTags200ApplicationJSON] = field(default=None)
    get_tags_default_application_json_object: Optional[GetTagsDefaultApplicationJSON] = field(default=None)
    
