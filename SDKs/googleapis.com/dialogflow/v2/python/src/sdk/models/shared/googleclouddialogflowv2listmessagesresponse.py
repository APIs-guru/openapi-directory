from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2message


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListMessagesResponse:
    messages: Optional[List[googleclouddialogflowv2message.GoogleCloudDialogflowV2Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
