from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DistributionCut:
    r"""DistributionCut
    A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
    """
    
    distribution_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionFilter') }})
    range: Optional[GoogleMonitoringV3Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
