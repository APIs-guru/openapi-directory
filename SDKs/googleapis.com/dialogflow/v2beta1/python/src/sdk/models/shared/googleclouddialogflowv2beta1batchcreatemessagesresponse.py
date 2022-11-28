from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse:
    r"""GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse
    The request message for Conversations.BatchCreateMessagesResponse.
    """
    
    messages: Optional[List[GoogleCloudDialogflowV2beta1Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    
