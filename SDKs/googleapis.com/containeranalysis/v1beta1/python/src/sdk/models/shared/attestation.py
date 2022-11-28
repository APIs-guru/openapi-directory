from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attestation:
    r"""Attestation
    Occurrence that represents a single \"attestation\". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
    """
    
    generic_signed_attestation: Optional[GenericSignedAttestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericSignedAttestation') }})
    pgp_signed_attestation: Optional[PgpSignedAttestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pgpSignedAttestation') }})
    
