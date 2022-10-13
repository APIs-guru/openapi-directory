from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetListsBestSellersHistoryJSONQueryParams:
    age_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'age-group', 'style': 'form', 'explode': True }})
    author: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    contributor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contributor', 'style': 'form', 'explode': True }})
    isbn: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'isbn', 'style': 'form', 'explode': True }})
    price: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'price', 'style': 'form', 'explode': True }})
    publisher: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publisher', 'style': 'form', 'explode': True }})
    title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListsBestSellersHistoryJSONSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetListsBestSellersHistoryJSONRequest:
    query_params: GetListsBestSellersHistoryJSONQueryParams = field(default=None)
    security: GetListsBestSellersHistoryJSONSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns:
    isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn10' }})
    isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn13' }})
    

@dataclass_json
@dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory:
    asterisk: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asterisk' }})
    bestsellers_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestsellers_date' }})
    dagger: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dagger' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name' }})
    primary_isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn10' }})
    primary_isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn13' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    ranks_last_week: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranks_last_week' }})
    weeks_on_list: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weeks_on_list' }})
    

@dataclass_json
@dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews:
    article_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article_chapter_link' }})
    book_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'book_review_link' }})
    first_chapter_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_chapter_link' }})
    sunday_review_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday_review_link' }})
    

@dataclass_json
@dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSONResults:
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age_group' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor' }})
    contributor_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_note' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    isbns: Optional[List[GetListsBestSellersHistoryJSON200ApplicationJSONResultsIsbns]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbns' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    ranks_history: Optional[List[GetListsBestSellersHistoryJSON200ApplicationJSONResultsRanksHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranks_history' }})
    reviews: Optional[List[GetListsBestSellersHistoryJSON200ApplicationJSONResultsReviews]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass_json
@dataclass
class GetListsBestSellersHistoryJSON200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[GetListsBestSellersHistoryJSON200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetListsBestSellersHistoryJSONResponse:
    content_type: str = field(default=None)
    get_lists_best_sellers_history_json_200_application_json_object: Optional[GetListsBestSellersHistoryJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
