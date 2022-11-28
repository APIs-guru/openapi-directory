from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayerScoreSubmissionList:
    r"""PlayerScoreSubmissionList
    A list of score submission requests.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    scores: Optional[List[ScoreSubmission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scores') }})
    
