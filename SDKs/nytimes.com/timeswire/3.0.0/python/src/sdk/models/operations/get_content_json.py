from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetContentJSONQueryParams:
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContentJSONRequest:
    query_params: GetContentJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetContentJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetContentJSONResponse:
    content_type: str = field(default=None)
    get_content_json_200_application_json_object: Optional[GetContentJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
