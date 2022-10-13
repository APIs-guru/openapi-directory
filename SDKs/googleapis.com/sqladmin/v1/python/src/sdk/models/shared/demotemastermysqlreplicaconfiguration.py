from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DemoteMasterMySQLReplicaConfiguration:
    ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caCertificate' }})
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
