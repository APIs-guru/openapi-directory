from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PgpSignedAttestationContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    SIMPLE_SIGNING_JSON = "SIMPLE_SIGNING_JSON"


@dataclass_json
@dataclass
class PgpSignedAttestation:
    content_type: Optional[PgpSignedAttestationContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    pgp_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pgpKeyId' }})
    signature: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    
