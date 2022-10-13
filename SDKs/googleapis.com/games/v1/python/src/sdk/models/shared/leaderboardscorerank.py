from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LeaderboardScoreRank:
    formatted_num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedNumScores' }})
    formatted_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedRank' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    num_scores: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numScores' }})
    rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    
