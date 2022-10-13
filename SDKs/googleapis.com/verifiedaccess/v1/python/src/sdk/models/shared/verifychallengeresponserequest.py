from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import signeddata


@dataclass_json
@dataclass
class VerifyChallengeResponseRequest:
    challenge_response: Optional[signeddata.SignedData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeResponse' }})
    expected_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectedIdentity' }})
    
