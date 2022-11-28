from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMessagesResponse:
    r"""ListMessagesResponse
    Lists the messages in the specified HL7v2 store.
    """
    
    hl7_v2_messages: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl7V2Messages') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
