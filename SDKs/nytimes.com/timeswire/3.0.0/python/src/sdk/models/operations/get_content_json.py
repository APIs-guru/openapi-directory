from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetContentJSONQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetContentJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetContentJSONRequest:
    query_params: GetContentJSONQueryParams = field()
    

@dataclass
class GetContentJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_content_json_200_application_json_object: Optional[GetContentJSON200ApplicationJSON] = field(default=None)
    
