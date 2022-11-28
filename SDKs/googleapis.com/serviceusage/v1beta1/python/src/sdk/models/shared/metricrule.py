from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricRule:
    r"""MetricRule
    Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
    """
    
    metric_costs: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricCosts') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    
