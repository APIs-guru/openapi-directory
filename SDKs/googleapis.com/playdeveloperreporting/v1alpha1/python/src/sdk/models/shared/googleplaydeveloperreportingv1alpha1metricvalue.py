from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePlayDeveloperReportingV1alpha1MetricValue:
    r"""GooglePlayDeveloperReportingV1alpha1MetricValue
    Represents the value of a metric.
    """
    
    decimal_value: Optional[GoogleTypeDecimal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decimalValue') }})
    metric: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    
