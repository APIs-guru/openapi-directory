from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IngestMessageRequestInput:
    r"""IngestMessageRequestInput
    Ingests a message into the specified HL7v2 store.
    """
    
    message: Optional[MessageInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
