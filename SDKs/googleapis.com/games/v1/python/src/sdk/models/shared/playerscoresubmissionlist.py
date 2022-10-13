from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scoresubmission


@dataclass_json
@dataclass
class PlayerScoreSubmissionList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    scores: Optional[List[scoresubmission.ScoreSubmission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scores' }})
    
