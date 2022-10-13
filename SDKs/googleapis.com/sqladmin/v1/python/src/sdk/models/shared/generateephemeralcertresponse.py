from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sslcert


@dataclass_json
@dataclass
class GenerateEphemeralCertResponse:
    ephemeral_cert: Optional[sslcert.SslCert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ephemeralCert' }})
    
