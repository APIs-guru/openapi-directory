from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudConnectorsV1AuthConfigSSHPublicKey:
    r"""GoogleCloudConnectorsV1AuthConfigSSHPublicKey
    Parameters to support Ssh public key Authentication.
    """
    
    cert_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certType') }})
    ssh_client_cert: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshClientCert') }})
    ssh_client_cert_pass: Optional[GoogleCloudConnectorsV1Secret] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshClientCertPass') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
