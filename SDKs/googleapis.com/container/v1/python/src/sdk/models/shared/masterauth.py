from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MasterAuth:
    r"""MasterAuth
    The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
    """
    
    client_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificate') }})
    client_certificate_config: Optional[ClientCertificateConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientCertificateConfig') }})
    client_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientKey') }})
    cluster_ca_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterCaCertificate') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
