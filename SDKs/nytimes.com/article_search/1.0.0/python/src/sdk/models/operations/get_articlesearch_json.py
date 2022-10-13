from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetArticlesearchJSONSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"


@dataclass
class GetArticlesearchJSONQueryParams:
    begin_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'begin_date', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    facet_field: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facet_field', 'style': 'form', 'explode': True }})
    facet_filter: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'facet_filter', 'style': 'form', 'explode': True }})
    fl: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fl', 'style': 'form', 'explode': True }})
    fq: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fq', 'style': 'form', 'explode': True }})
    hl: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'hl', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[GetArticlesearchJSONSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArticlesearchJSONRequest:
    query_params: GetArticlesearchJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetArticlesearchJSON200ApplicationJSONResponseMeta:
    hits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hits' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

@dataclass_json
@dataclass
class GetArticlesearchJSON200ApplicationJSONResponse:
    docs: Optional[List[shared.Doc]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'docs' }})
    meta: Optional[GetArticlesearchJSON200ApplicationJSONResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class GetArticlesearchJSON200ApplicationJSON:
    response: Optional[GetArticlesearchJSON200ApplicationJSONResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    

@dataclass
class GetArticlesearchJSONResponse:
    content_type: str = field(default=None)
    get_articlesearch_json_200_application_json_object: Optional[GetArticlesearchJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
