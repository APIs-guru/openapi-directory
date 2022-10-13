from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJobAlertConfig:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    min_acceptable_mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAcceptableMeanAveragePrecision' }})
    
