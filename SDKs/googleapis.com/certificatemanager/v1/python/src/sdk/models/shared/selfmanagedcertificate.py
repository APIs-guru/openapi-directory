from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SelfManagedCertificate:
    pem_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemCertificate' }})
    pem_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemPrivateKey' }})
    
