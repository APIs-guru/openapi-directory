from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudMlV1PredictionOutput:
    error_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCount' }})
    node_hours: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeHours' }})
    output_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputPath' }})
    prediction_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predictionCount' }})
    
