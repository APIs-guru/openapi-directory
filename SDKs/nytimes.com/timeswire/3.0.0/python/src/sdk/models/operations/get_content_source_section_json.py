from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetContentSourceSectionJSONSourceEnum(str, Enum):
    ALL = "all"
    NYT = "nyt"
    IHT = "iht"


@dataclass
class GetContentSourceSectionJSONPathParams:
    section: str = field(metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    source: GetContentSourceSectionJSONSourceEnum = field(metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentSourceSectionJSONQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetContentSourceSectionJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetContentSourceSectionJSONRequest:
    path_params: GetContentSourceSectionJSONPathParams = field()
    query_params: GetContentSourceSectionJSONQueryParams = field()
    

@dataclass
class GetContentSourceSectionJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_content_source_section_json_200_application_json_object: Optional[GetContentSourceSectionJSON200ApplicationJSON] = field(default=None)
    
