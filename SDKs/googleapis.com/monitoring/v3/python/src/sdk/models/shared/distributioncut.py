from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlemonitoringv3range


@dataclass_json
@dataclass
class DistributionCut:
    distribution_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributionFilter' }})
    range: Optional[googlemonitoringv3range.GoogleMonitoringV3Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
