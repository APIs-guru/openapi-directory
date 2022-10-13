from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clientcertificateconfig


@dataclass_json
@dataclass
class MasterAuth:
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    client_certificate_config: Optional[clientcertificateconfig.ClientCertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificateConfig' }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientKey' }})
    cluster_ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterCaCertificate' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
