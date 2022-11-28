from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayerScoreListResponse:
    r"""PlayerScoreListResponse
    A list of score submission statuses.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    submitted_scores: Optional[List[PlayerScoreResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submittedScores') }})
    
