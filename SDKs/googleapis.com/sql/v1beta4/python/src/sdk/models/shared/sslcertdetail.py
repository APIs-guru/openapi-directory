from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sslcert


@dataclass_json
@dataclass
class SslCertDetail:
    cert_info: Optional[sslcert.SslCert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certInfo' }})
    cert_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certPrivateKey' }})
    
