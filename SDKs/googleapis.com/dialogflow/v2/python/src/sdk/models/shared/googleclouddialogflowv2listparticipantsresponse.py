from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2participant


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2ListParticipantsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    participants: Optional[List[googleclouddialogflowv2participant.GoogleCloudDialogflowV2Participant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    
