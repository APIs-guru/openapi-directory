from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Challenge:
    r"""Challenge
    Result message for VerifiedAccess.GenerateChallenge.
    """
    
    alternative_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeChallenge') }})
    challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    
