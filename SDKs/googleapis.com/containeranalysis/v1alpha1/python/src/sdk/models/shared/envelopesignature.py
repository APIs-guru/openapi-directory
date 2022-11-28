from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnvelopeSignature:
    r"""EnvelopeSignature
    A DSSE signature
    """
    
    keyid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    sig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sig') }})
    
