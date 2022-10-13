from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MysqlSslConfig:
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    ca_certificate_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificateSet' }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_certificate_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificateSet' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    client_key_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKeySet' }})
    
