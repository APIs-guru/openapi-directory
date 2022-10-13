from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bin
from . import percentiles


@dataclass_json
@dataclass
class Metric:
    histogram: Optional[List[bin.Bin]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogram' }})
    percentiles: Optional[percentiles.Percentiles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentiles' }})
    
