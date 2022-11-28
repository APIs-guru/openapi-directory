from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DsseAttestationOccurrence:
    r"""DsseAttestationOccurrence
    An occurrence describing an attestation on a resource
    """
    
    envelope: Optional[Envelope] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envelope') }})
    statement: Optional[InTotoStatement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statement') }})
    
