from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetListsNamesFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"


@dataclass
class GetListsNamesFormatPathParams:
    format: GetListsNamesFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListsNamesFormatQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api-key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListsNamesFormatSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetListsNamesFormatRequest:
    path_params: GetListsNamesFormatPathParams = field(default=None)
    query_params: GetListsNamesFormatQueryParams = field(default=None)
    security: GetListsNamesFormatSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetListsNamesFormat200ApplicationJSONResults:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    list_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name' }})
    list_name_encoded: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list_name_encoded' }})
    newest_published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newest_published_date' }})
    oldest_published_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldest_published_date' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    

@dataclass_json
@dataclass
class GetListsNamesFormat200ApplicationJSON:
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_results' }})
    results: Optional[List[GetListsNamesFormat200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetListsNamesFormatResponse:
    content_type: str = field(default=None)
    get_lists_names_format_200_application_json_object: Optional[GetListsNamesFormat200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
