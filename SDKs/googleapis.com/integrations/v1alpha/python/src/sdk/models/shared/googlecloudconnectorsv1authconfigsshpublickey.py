from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudconnectorsv1secret
from . import googlecloudconnectorsv1secret
from . import googlecloudconnectorsv1secret


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigSSHPublicKey:
    cert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certType' }})
    password: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    ssh_client_cert: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshClientCert' }})
    ssh_client_cert_pass: Optional[googlecloudconnectorsv1secret.GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshClientCertPass' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
