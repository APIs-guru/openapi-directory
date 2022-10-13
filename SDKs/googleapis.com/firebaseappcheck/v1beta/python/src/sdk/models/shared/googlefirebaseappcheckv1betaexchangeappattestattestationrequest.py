from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest:
    attestation_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestationStatement' }})
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challenge' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyId' }})
    
