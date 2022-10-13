from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1OperatorMetadata:
    comments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    label_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelVotes' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    total_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalVotes' }})
    
