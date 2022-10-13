from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1participant


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListParticipantsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    participants: Optional[List[googleclouddialogflowv2beta1participant.GoogleCloudDialogflowV2beta1Participant]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participants' }})
    
