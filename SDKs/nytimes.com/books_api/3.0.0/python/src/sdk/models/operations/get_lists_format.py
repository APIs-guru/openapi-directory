from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetListsFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclass
class GetListsFormatPathParams:
    format: GetListsFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    
class GetListsFormatSortOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclass
class GetListsFormatQueryParams:
    bestsellers_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'bestsellers-date', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    isbn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    list: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'list', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    published_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'published-date', 'style': 'form', 'explode': True }})
    rank: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rank', 'style': 'form', 'explode': True }})
    rank_last_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rank-last-week', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetListsFormatSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort-order', 'style': 'form', 'explode': True }})
    weeks_on_list: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'weeks-on-list', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListsFormatSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetListsFormatRequest:
    path_params: GetListsFormatPathParams = field(default=None)
    query_params: GetListsFormatQueryParams = field(default=None)
    security: GetListsFormatSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListsFormat200ApplicationJSONResultsBookDetails:
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age_group' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor' }})
    contributor_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_note' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    primary_isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn10' }})
    primary_isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn13' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetListsFormat200ApplicationJSONResultsIsbns:
    isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn10' }})
    isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn13' }})
    

@dataclass_json
@dataclass
class GetListsFormat200ApplicationJSONResultsReviews:
    article_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article_chapter_link' }})
    book_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_review_link' }})
    first_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_chapter_link' }})
    sunday_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday_review_link' }})
    

@dataclass_json
@dataclass
class GetListsFormat200ApplicationJSONResults:
    amazon_product_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazon_product_url' }})
    asterisk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asterisk' }})
    bestsellers_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestsellers_date' }})
    book_details: Optional[List[GetListsFormat200ApplicationJSONResultsBookDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_details' }})
    dagger: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dagger' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    isbns: Optional[List[GetListsFormat200ApplicationJSONResultsIsbns]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbns' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    rank_last_week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank_last_week' }})
    reviews: Optional[List[GetListsFormat200ApplicationJSONResultsReviews]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    weeks_on_list: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeks_on_list' }})
    

@dataclass_json
@dataclass
class GetListsFormat200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[GetListsFormat200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetListsFormatResponse:
    content_type: str = field(default=None)
    get_lists_format_200_application_json_object: Optional[GetListsFormat200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
