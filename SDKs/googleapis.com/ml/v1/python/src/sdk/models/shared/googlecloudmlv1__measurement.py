from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1_measurement_metric


@dataclass_json
@dataclass
class GoogleCloudMlV1Measurement:
    elapsed_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elapsedTime' }})
    metrics: Optional[List[googlecloudmlv1_measurement_metric.GoogleCloudMlV1MeasurementMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    step_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepCount' }})
    
