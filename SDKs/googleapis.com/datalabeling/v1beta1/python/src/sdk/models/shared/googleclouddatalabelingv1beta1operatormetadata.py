from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1OperatorMetadata:
    r"""GoogleCloudDatalabelingV1beta1OperatorMetadata
    General information useful for labels coming from contributors.
    """
    
    comments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    label_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelVotes') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    total_votes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalVotes') }})
    
