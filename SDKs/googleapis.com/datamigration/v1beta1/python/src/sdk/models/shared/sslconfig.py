from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SslConfigTypeEnum(str, Enum):
    SSL_TYPE_UNSPECIFIED = "SSL_TYPE_UNSPECIFIED"
    SERVER_ONLY = "SERVER_ONLY"
    SERVER_CLIENT = "SERVER_CLIENT"


@dataclass_json
@dataclass
class SslConfig:
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    type: Optional[SslConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
