from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaClientCertificate:
    r"""GoogleCloudIntegrationsV1alphaClientCertificate
    Contains client certificate information
    """
    
    encrypted_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedPrivateKey') }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passphrase') }})
    ssl_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslCertificate') }})
    
