from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NameMatchCandidateOut:
    r"""NameMatchCandidateOut
    The ordered list of name matching candidates
    """
    
    candidate_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('candidateName') }})
    pred_score_family_name: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predScoreFamilyName') }})
    pred_score_given_name: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predScoreGivenName') }})
    probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probability') }})
    
