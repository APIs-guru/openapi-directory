from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetImagesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetImagesRequest:
    query_params: GetImagesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetImages200ApplicationJSON:
    data: Optional[List[shared.ImagePublic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetImagesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetImagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_images_200_application_json_object: Optional[GetImages200ApplicationJSON] = field(default=None)
    get_images_default_application_json_object: Optional[GetImagesDefaultApplicationJSON] = field(default=None)
    
