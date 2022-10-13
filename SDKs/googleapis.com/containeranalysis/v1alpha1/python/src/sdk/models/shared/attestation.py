from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pgpsignedattestation


@dataclass_json
@dataclass
class Attestation:
    pgp_signed_attestation: Optional[pgpsignedattestation.PgpSignedAttestation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pgpSignedAttestation' }})
    
