from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExtendedKeyUsageOptions:
    client_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAuth' }})
    code_signing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeSigning' }})
    email_protection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailProtection' }})
    ocsp_signing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ocspSigning' }})
    server_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverAuth' }})
    time_stamping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamping' }})
    
