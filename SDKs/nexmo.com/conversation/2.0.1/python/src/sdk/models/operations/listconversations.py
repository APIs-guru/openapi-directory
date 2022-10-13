from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListConversationsQueryParams:
    date_end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    record_index: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'record_index', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConversationsRequest:
    query_params: ListConversationsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinks:
    self: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversations:
    links: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbedded:
    conversations: List[ListConversations200ApplicationJSONEmbeddedConversations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSON:
    embedded: ListConversations200ApplicationJSONEmbedded = field(default=None, metadata={'dataclasses_json': { 'field_name': '_embedded' }})
    links: shared.LinksConversationsList = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    page_size: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    record_index: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record_index' }})
    

@dataclass
class ListConversationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_conversations_200_application_json_object: Optional[ListConversations200ApplicationJSON] = field(default=None)
    
