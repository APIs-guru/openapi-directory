from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import secret
from . import secret
from . import secret


@dataclass_json
@dataclass
class SSHPublicKey:
    cert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certType' }})
    password: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    ssh_client_cert: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshClientCert' }})
    ssh_client_cert_pass: Optional[secret.Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshClientCertPass' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
