from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StructuredMessage:
    r"""StructuredMessage
    A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
    """
    
    message_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageKey') }})
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageText') }})
    parameters: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
