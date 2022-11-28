from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListParticipantsResponse:
    r"""GoogleCloudDialogflowV2beta1ListParticipantsResponse
    The response message for Participants.ListParticipants.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    participants: Optional[List[GoogleCloudDialogflowV2beta1Participant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    
