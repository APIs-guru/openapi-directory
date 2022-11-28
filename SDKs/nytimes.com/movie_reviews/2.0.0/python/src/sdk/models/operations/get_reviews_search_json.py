from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    

@dataclass_json
@dataclass
class GetReviewsSearchJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Movie]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetReviewsSearchJSONRequest:
    query_params: GetReviewsSearchJSONQueryParams = field()
    

@dataclass
class GetReviewsSearchJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_reviews_search_json_200_application_json_object: Optional[GetReviewsSearchJSON200ApplicationJSON] = field(default=None)
    
