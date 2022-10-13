from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NameMatchCandidateOut:
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'candidateName' }})
    pred_score_family_name: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predScoreFamilyName' }})
    pred_score_given_name: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predScoreGivenName' }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probability' }})
    
