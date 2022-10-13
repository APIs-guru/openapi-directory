from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import certificatechains

class KeyOperationAttestationFormatEnum(str, Enum):
    ATTESTATION_FORMAT_UNSPECIFIED = "ATTESTATION_FORMAT_UNSPECIFIED"
    CAVIUM_V1_COMPRESSED = "CAVIUM_V1_COMPRESSED"
    CAVIUM_V2_COMPRESSED = "CAVIUM_V2_COMPRESSED"


@dataclass_json
@dataclass
class KeyOperationAttestation:
    cert_chains: Optional[certificatechains.CertificateChains] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certChains' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    format: Optional[KeyOperationAttestationFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    
