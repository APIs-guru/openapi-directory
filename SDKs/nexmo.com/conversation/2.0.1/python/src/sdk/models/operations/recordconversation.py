from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
RECORD_CONVERSATION_SERVERS = [
	"https://api.nexmo.com/v1",
]


@dataclass
class RecordConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RecordConversationRequestBody:
    action: shared.ActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    event_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_method' }})
    event_url: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_url' }})
    format: Optional[shared.FormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    split: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'split' }})
    

@dataclass
class RecordConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: RecordConversationPathParams = field(default=None)
    request: Optional[RecordConversationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecordConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
