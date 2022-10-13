from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class ListMessagesResponse:
    hl7_v2_messages: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl7V2Messages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
