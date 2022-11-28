from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1CreateMessageRequestInput:
    r"""GoogleCloudDialogflowV2beta1CreateMessageRequestInput
    The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.
    """
    
    message: Optional[GoogleCloudDialogflowV2beta1MessageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
