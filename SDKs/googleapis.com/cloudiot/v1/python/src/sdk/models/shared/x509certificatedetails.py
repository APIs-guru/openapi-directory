from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class X509CertificateDetails:
    expiry_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryTime' }})
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    public_key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyType' }})
    signature_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signatureAlgorithm' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
