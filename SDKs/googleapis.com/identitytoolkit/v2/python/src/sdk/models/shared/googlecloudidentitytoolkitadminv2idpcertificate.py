from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2IdpCertificate:
    x509_certificate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x509Certificate' }})
    
