from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PgpSignedAttestationContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    SIMPLE_SIGNING_JSON = "SIMPLE_SIGNING_JSON"


@dataclass_json
@dataclass
class PgpSignedAttestation:
    r"""PgpSignedAttestation
    An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
    """
    
    content_type: Optional[PgpSignedAttestationContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    pgp_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pgpKeyId') }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
