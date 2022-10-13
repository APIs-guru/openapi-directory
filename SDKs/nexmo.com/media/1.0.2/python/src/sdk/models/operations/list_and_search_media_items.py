from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListAndSearchMediaItemsOrderEnum(str, Enum):
    ASCENDING = "ascending"
    DESCENDING = "descending"


@dataclass
class ListAndSearchMediaItemsQueryParams:
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    order: Optional[ListAndSearchMediaItemsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_index', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_time', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAndSearchMediaItemsRequest:
    query_params: ListAndSearchMediaItemsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSONEmbedded:
    media: Optional[List[shared.Media]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksFirst:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksLast:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSONLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSONLinks:
    first: Optional[ListAndSearchMediaItems200ApplicationJSONLinksFirst] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    last: Optional[ListAndSearchMediaItems200ApplicationJSONLinksLast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    self: Optional[ListAndSearchMediaItems200ApplicationJSONLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class ListAndSearchMediaItems200ApplicationJSON:
    embedded: Optional[ListAndSearchMediaItems200ApplicationJSONEmbedded] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: Optional[ListAndSearchMediaItems200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    page_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_index' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    

@dataclass
class ListAndSearchMediaItemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_and_search_media_items_200_application_json_object: Optional[ListAndSearchMediaItems200ApplicationJSON] = field(default=None)
    
