from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetReviewsResourceTypeJSONResourceTypeEnum(str, Enum):
    ALL = "all"
    PICKS = "picks"


@dataclass
class GetReviewsResourceTypeJSONPathParams:
    resource_type: GetReviewsResourceTypeJSONResourceTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'resource-type', 'style': 'simple', 'explode': False }})
    
class GetReviewsResourceTypeJSONOrderEnum(str, Enum):
    BY_TITLE = "by-title"
    BY_PUBLICATION_DATE = "by-publication-date"
    BY_OPENING_DATE = "by-opening-date"


@dataclass
class GetReviewsResourceTypeJSONQueryParams:
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[GetReviewsResourceTypeJSONOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReviewsResourceTypeJSONRequest:
    path_params: GetReviewsResourceTypeJSONPathParams = field(default=None)
    query_params: GetReviewsResourceTypeJSONQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetReviewsResourceTypeJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[shared.Movie]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetReviewsResourceTypeJSONResponse:
    content_type: str = field(default=None)
    get_reviews_resource_type_json_200_application_json_object: Optional[GetReviewsResourceTypeJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
