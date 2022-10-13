from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetReviewsSearchJSONCriticsPickEnum(str, Enum):
    Y = "Y"
    N = "N"


@dataclass
class GetReviewsSearchJSONQueryParams:
    critics_pick: Optional[GetReviewsSearchJSONCriticsPickEnum] = field(default=None, metadata={'query_param': { 'field_name': 'critics-pick', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opening_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'opening-date', 'style': 'form', 'explode': True }})
    order: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    publication_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publication-date', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    reviewer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'reviewer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReviewsSearchJSONRequest:
    query_params: GetReviewsSearchJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetReviewsSearchJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Movie]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetReviewsSearchJSONResponse:
    content_type: str = field(default=None)
    get_reviews_search_json_200_application_json_object: Optional[GetReviewsSearchJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
