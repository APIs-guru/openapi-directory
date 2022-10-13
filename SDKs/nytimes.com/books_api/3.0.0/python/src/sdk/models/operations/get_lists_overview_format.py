from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetListsOverviewFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclass
class GetListsOverviewFormatPathParams:
    format: GetListsOverviewFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListsOverviewFormatQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    published_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'published_date', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListsOverviewFormatSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetListsOverviewFormatRequest:
    path_params: GetListsOverviewFormatPathParams = field(default=None)
    query_params: GetListsOverviewFormatQueryParams = field(default=None)
    security: GetListsOverviewFormatSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListsOverviewFormat200ApplicationJSONResultsListsBooks:
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age_group' }})
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    contributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor' }})
    contributor_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributor_note' }})
    created_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_date' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    price: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    primary_isbn10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn10' }})
    primary_isbn13: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_isbn13' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_date' }})
    

@dataclass_json
@dataclass
class GetListsOverviewFormat200ApplicationJSONResultsLists:
    books: Optional[List[GetListsOverviewFormat200ApplicationJSONResultsListsBooks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'books' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    list_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_id' }})
    list_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_image' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass_json
@dataclass
class GetListsOverviewFormat200ApplicationJSONResults:
    bestsellers_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bestsellers_date' }})
    lists: Optional[List[GetListsOverviewFormat200ApplicationJSONResultsLists]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lists' }})
    published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_date' }})
    

@dataclass_json
@dataclass
class GetListsOverviewFormat200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[GetListsOverviewFormat200ApplicationJSONResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetListsOverviewFormatResponse:
    content_type: str = field(default=None)
    get_lists_overview_format_200_application_json_object: Optional[GetListsOverviewFormat200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
