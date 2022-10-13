from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval:
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceLevel' }})
    lower_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowerBound' }})
    ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    upper_bound: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upperBound' }})
    
