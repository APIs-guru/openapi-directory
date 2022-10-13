from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificate


@dataclass_json
@dataclass
class Certificate:
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    issuing_certificate: Optional[certificate.Certificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuingCertificate' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alternative_name: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeName' }})
    thumbprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbprint' }})
    
