from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricmatrixrow


@dataclass_json
@dataclass
class MetricMatrix:
    rows: Optional[List[metricmatrixrow.MetricMatrixRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
