from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetListsDateListJSONPathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    list: str = field(default=None, metadata={'path_param': { 'field_name': 'list', 'style': 'simple', 'explode': False }})
    
class GetListsDateListJSONSortOrderEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"


@dataclass
class GetListsDateListJSONQueryParams:
    bestsellers_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bestsellers-date', 'style': 'form', 'explode': True }})
    isbn: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    list_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'list-name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    published_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'published-date', 'style': 'form', 'explode': True }})
    rank: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'rank', 'style': 'form', 'explode': True }})
    rank_last_week: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rank-last-week', 'style': 'form', 'explode': True }})
    sort_order: Optional[GetListsDateListJSONSortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort-order', 'style': 'form', 'explode': True }})
    weeks_on_list: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'weeks-on-list', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListsDateListJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetListsDateListJSONRequest:
    path_params: GetListsDateListJSONPathParams = field(default=None)
    query_params: GetListsDateListJSONQueryParams = field(default=None)
    security: GetListsDateListJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListsDateListJSON200ApplicationJSONResultsBooksIsbns:
    isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn10' }})
    isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn13' }})
    

@dataclass_json
@dataclass
class GetListsDateListJSON200ApplicationJSONResultsBooks:
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age_group' }})
    amazon_product_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazon_product_url' }})
    article_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article_chapter_link' }})
    asterisk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asterisk' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    book_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_image' }})
    book_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_review_link' }})
    contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor' }})
    contributor_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_note' }})
    dagger: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dagger' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    first_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_chapter_link' }})
    isbns: Optional[List[GetListsDateListJSON200ApplicationJSONResultsBooksIsbns]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbns' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    primary_isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn10' }})
    primary_isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn13' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    rank_last_week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank_last_week' }})
    sunday_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday_review_link' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    weeks_on_list: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeks_on_list' }})
    

@dataclass_json
@dataclass
class GetListsDateListJSON200ApplicationJSONResults:
    bestsellers_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestsellers_date' }})
    books: Optional[List[GetListsDateListJSON200ApplicationJSONResultsBooks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'books' }})
    corrections: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'corrections' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name' }})
    normal_list_ends_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'normal_list_ends_at' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass_json
@dataclass
class GetListsDateListJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[GetListsDateListJSON200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetListsDateListJSONResponse:
    content_type: str = field(default=None)
    get_lists_date_list_json_200_application_json_object: Optional[GetListsDateListJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
