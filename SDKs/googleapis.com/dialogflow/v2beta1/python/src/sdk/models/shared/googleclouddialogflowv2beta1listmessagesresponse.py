from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ListMessagesResponse:
    r"""GoogleCloudDialogflowV2beta1ListMessagesResponse
    The response message for Conversations.ListMessages.
    """
    
    messages: Optional[List[GoogleCloudDialogflowV2beta1Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
