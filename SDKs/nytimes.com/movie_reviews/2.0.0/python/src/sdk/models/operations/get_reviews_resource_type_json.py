from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetReviewsResourceTypeJSONResourceTypeEnum(str, Enum):
    ALL = "all"
    PICKS = "picks"


@dataclass
class GetReviewsResourceTypeJSONPathParams:
    resource_type: GetReviewsResourceTypeJSONResourceTypeEnum = field(metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    
class GetReviewsResourceTypeJSONOrderEnum(str, Enum):
    BY_TITLE = "by-title"
    BY_PUBLICATION_DATE = "by-publication-date"
    BY_OPENING_DATE = "by-opening-date"


@dataclass
class GetReviewsResourceTypeJSONQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetReviewsResourceTypeJSONOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetReviewsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_results') }})
    results: Optional[List[shared.Movie]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetReviewsResourceTypeJSONRequest:
    path_params: GetReviewsResourceTypeJSONPathParams = field()
    query_params: GetReviewsResourceTypeJSONQueryParams = field()
    

@dataclass
class GetReviewsResourceTypeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_reviews_resource_type_json_200_application_json_object: Optional[GetReviewsResourceTypeJSON200ApplicationJSON] = field(default=None)
    
