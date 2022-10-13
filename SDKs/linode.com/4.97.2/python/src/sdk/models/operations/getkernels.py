from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetKernelsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetKernelsRequest:
    query_params: GetKernelsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetKernels200ApplicationJSON:
    data: Optional[List[shared.Kernel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetKernelsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetKernelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_kernels_200_application_json_object: Optional[GetKernels200ApplicationJSON] = field(default=None)
    get_kernels_default_application_json_object: Optional[GetKernelsDefaultApplicationJSON] = field(default=None)
    
