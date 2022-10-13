from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AlgorithmObjectiveEnum(str, Enum):
    TRANSPORT_TIME = "transport_time"
    COMPLETION_TIME = "completion_time"

class AlgorithmProblemTypeEnum(str, Enum):
    MIN = "min"
    MIN_MAX = "min-max"


@dataclass_json
@dataclass
class Algorithm:
    objective: Optional[AlgorithmObjectiveEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objective' }})
    problem_type: Optional[AlgorithmProblemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'problem_type' }})
    
