from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Certificate:
    issuer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    not_after_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notAfterTime' }})
    not_before_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notBeforeTime' }})
    parsed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parsed' }})
    raw_der: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawDer' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    sha256_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256Fingerprint' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    subject_alternative_dns_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectAlternativeDnsNames' }})
    
