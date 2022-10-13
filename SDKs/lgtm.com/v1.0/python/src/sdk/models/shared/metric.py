from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import measurement


@dataclass_json
@dataclass
class Metric:
    measurements: Optional[List[measurement.Measurement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurements' }})
    metric_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric-id' }})
    
