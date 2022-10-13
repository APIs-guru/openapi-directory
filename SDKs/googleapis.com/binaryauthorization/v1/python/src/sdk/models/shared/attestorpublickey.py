from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pkixpublickey


@dataclass_json
@dataclass
class AttestorPublicKey:
    ascii_armored_pgp_public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asciiArmoredPgpPublicKey' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pkix_public_key: Optional[pkixpublickey.PkixPublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pkixPublicKey' }})
    
