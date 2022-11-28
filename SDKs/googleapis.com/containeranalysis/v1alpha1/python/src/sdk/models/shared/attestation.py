from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Attestation:
    r"""Attestation
    Occurrence that represents a single \"attestation\". The authenticity of an Attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the AttestationAuthority to which this Attestation is attached is primarily useful for look-up (how to find this Attestation if you already know the Authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
    """
    
    pgp_signed_attestation: Optional[PgpSignedAttestation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pgpSignedAttestation') }})
    
