from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1HyperparameterOutputHyperparameterMetric:
    objective_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectiveValue' }})
    training_step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingStep' }})
    
