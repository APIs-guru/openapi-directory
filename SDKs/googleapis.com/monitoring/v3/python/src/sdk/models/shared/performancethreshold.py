from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import basicsli
from . import requestbasedsli


@dataclass_json
@dataclass
class PerformanceThreshold:
    basic_sli_performance: Optional[basicsli.BasicSli] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicSliPerformance' }})
    performance: Optional[requestbasedsli.RequestBasedSli] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'performance' }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threshold' }})
    
