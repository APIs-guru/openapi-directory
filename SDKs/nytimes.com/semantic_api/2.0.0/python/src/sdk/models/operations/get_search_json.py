from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetSearchJSONFieldsEnum(str, Enum):
    ALL = "all"
    PAGES = "pages"
    TICKER_SYMBOL = "ticker_symbol"
    LINKS = "links"
    TAXONOMY = "taxonomy"
    COMBINATIONS = "combinations"
    GEOCODES = "geocodes"
    ARTICLE_LIST = "article_list"
    SCOPE_NOTES = "scope_notes"
    SEARCH_API_QUERY = "search_api_query"


@dataclass
class GetSearchJSONQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    fields: Optional[GetSearchJSONFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSearchJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.ConceptRelation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetSearchJSONRequest:
    query_params: GetSearchJSONQueryParams = field()
    

@dataclass
class GetSearchJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_search_json_200_application_json_object: Optional[GetSearchJSON200ApplicationJSON] = field(default=None)
    
