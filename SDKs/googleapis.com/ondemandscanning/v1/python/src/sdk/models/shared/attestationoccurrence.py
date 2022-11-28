from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttestationOccurrence:
    r"""AttestationOccurrence
    Occurrence that represents a single \"attestation\". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
    """
    
    jwts: Optional[List[Jwt]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwts') }})
    serialized_payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serializedPayload') }})
    signatures: Optional[List[Signature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signatures') }})
    
