from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metric_name


@dataclass_json
@dataclass
class MetricsList:
    data: Optional[List[metric_name.MetricName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
