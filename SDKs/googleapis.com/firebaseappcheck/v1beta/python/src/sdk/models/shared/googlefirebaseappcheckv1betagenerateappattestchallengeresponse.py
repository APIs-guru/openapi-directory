from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse:
    r"""GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse
    Response message for the GenerateAppAttestChallenge method.
    """
    
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
