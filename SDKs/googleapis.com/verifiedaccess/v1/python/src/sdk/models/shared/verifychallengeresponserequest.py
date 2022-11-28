from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VerifyChallengeResponseRequest:
    r"""VerifyChallengeResponseRequest
    signed ChallengeResponse
    """
    
    challenge_response: Optional[SignedData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeResponse') }})
    expected_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedIdentity') }})
    
