from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaAppCheckToken:
    attestation_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestationToken' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
