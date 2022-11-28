from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListConversationsQueryParams:
    date_end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    record_index: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'record_index', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversationsLinks:
    self: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbeddedConversations:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    links: Optional[ListConversations200ApplicationJSONEmbeddedConversationsLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSONEmbedded:
    r"""ListConversations200ApplicationJSONEmbedded
    A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
    """
    
    conversations: List[ListConversations200ApplicationJSONEmbeddedConversations] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversations') }})
    

@dataclass_json
@dataclass
class ListConversations200ApplicationJSON:
    embedded: ListConversations200ApplicationJSONEmbedded = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    links: shared.LinksConversationsList = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    page_size: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    record_index: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record_index') }})
    

@dataclass
class ListConversationsRequest:
    query_params: ListConversationsQueryParams = field()
    

@dataclass
class ListConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    list_conversations_200_application_json_object: Optional[ListConversations200ApplicationJSON] = field(default=None)
    
