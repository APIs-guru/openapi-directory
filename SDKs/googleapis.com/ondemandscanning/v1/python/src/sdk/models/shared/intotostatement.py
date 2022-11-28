from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InTotoStatement:
    r"""InTotoStatement
    Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always \"application/vnd.in-toto+json\".
    """
    
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_type') }})
    predicate_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predicateType') }})
    provenance: Optional[InTotoProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provenance') }})
    slsa_provenance: Optional[SlsaProvenance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slsaProvenance') }})
    slsa_provenance_zero_two: Optional[SlsaProvenanceZeroTwo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slsaProvenanceZeroTwo') }})
    subject: Optional[List[Subject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
