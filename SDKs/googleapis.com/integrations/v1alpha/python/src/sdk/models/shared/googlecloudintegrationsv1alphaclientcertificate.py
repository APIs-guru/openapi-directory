from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaClientCertificate:
    encrypted_private_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedPrivateKey' }})
    passphrase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passphrase' }})
    ssl_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslCertificate' }})
    
