from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TLSCertificate:
    cert: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cert' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialNumber' }})
    sha1_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Fingerprint' }})
    
