from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypedecimal


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1beta1MetricValue:
    decimal_value: Optional[googletypedecimal.GoogleTypeDecimal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimalValue' }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    
