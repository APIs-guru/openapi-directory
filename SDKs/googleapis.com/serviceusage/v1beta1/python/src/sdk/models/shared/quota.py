from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import quotalimit
from . import metricrule


@dataclass_json
@dataclass
class Quota:
    limits: Optional[List[quotalimit.QuotaLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limits' }})
    metric_rules: Optional[List[metricrule.MetricRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricRules' }})
    
