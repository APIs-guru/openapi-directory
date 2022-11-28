from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IngestMessageResponse:
    r"""IngestMessageResponse
    Acknowledges that a message has been ingested into the specified HL7v2 store.
    """
    
    hl7_ack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hl7Ack') }})
    message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
