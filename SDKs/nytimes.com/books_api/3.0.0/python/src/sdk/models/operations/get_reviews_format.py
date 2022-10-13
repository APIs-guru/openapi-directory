from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetReviewsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclass
class GetReviewsFormatPathParams:
    format: GetReviewsFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReviewsFormatQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    author: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    isbn: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReviewsFormatSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetReviewsFormatRequest:
    path_params: GetReviewsFormatPathParams = field(default=None)
    query_params: GetReviewsFormatQueryParams = field(default=None)
    security: GetReviewsFormatSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetReviewsFormat200ApplicationJSONResults:
    book_author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_author' }})
    book_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_title' }})
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    isbn13: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn13' }})
    publication_dt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publication_dt' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class GetReviewsFormat200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[GetReviewsFormat200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetReviewsFormatResponse:
    content_type: str = field(default=None)
    get_reviews_format_200_application_json_object: Optional[GetReviewsFormat200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
