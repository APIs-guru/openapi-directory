from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetNameConceptTypeSpecificConceptJSONConceptTypeEnum(str, Enum):
    NYTD_GEO = "nytd_geo"
    NYTD_PER = "nytd_per"
    NYTD_ORG = "nytd_org"
    NYTD_DES = "nytd_des"


@dataclass
class GetNameConceptTypeSpecificConceptJSONPathParams:
    concept_type: GetNameConceptTypeSpecificConceptJSONConceptTypeEnum = field(metadata={'path_param': { 'field_name': 'concept-type', 'style': 'simple', 'explode': False }})
    specific_concept: str = field(metadata={'path_param': { 'field_name': 'specific-concept', 'style': 'simple', 'explode': False }})
    
class GetNameConceptTypeSpecificConceptJSONFieldsEnum(str, Enum):
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
class GetNameConceptTypeSpecificConceptJSONQueryParams:
    query: str = field(metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    fields: Optional[GetNameConceptTypeSpecificConceptJSONFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetNameConceptTypeSpecificConceptJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Concept]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetNameConceptTypeSpecificConceptJSONRequest:
    path_params: GetNameConceptTypeSpecificConceptJSONPathParams = field()
    query_params: GetNameConceptTypeSpecificConceptJSONQueryParams = field()
    

@dataclass
class GetNameConceptTypeSpecificConceptJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_name_concept_type_specific_concept_json_200_application_json_object: Optional[GetNameConceptTypeSpecificConceptJSON200ApplicationJSON] = field(default=None)
    
