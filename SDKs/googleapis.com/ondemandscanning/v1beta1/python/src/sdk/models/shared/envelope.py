from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Envelope:
    r"""Envelope
    MUST match https://github.com/secure-systems-lab/dsse/blob/master/envelope.proto. An authenticated message of arbitrary type.
    """
    
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    payload_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payloadType') }})
    signatures: Optional[List[EnvelopeSignature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    
