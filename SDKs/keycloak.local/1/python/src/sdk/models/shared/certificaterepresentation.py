from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CertificateRepresentation:
    certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    kid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kid' }})
    private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKey' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKey' }})
    
