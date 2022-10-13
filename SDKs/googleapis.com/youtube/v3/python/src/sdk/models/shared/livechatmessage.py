from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import livechatmessageauthordetails
from . import livechatmessagesnippet


@dataclass_json
@dataclass
class LiveChatMessage:
    author_details: Optional[livechatmessageauthordetails.LiveChatMessageAuthorDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorDetails' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    snippet: Optional[livechatmessagesnippet.LiveChatMessageSnippet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snippet' }})
    
