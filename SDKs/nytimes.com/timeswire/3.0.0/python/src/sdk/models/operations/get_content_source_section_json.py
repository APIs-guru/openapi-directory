from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetContentSourceSectionJSONSourceEnum(str, Enum):
    ALL = "all"
    NYT = "nyt"
    IHT = "iht"


@dataclass
class GetContentSourceSectionJSONPathParams:
    section: str = field(default=None, metadata={'path_param': { 'field_name': 'section', 'style': 'simple', 'explode': False }})
    source: GetContentSourceSectionJSONSourceEnum = field(default=None, metadata={'path_param': { 'field_name': 'source', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContentSourceSectionJSONQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContentSourceSectionJSONRequest:
    path_params: GetContentSourceSectionJSONPathParams = field(default=None)
    query_params: GetContentSourceSectionJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetContentSourceSectionJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Article]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetContentSourceSectionJSONResponse:
    content_type: str = field(default=None)
    get_content_source_section_json_200_application_json_object: Optional[GetContentSourceSectionJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
