from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IterationPerformance:
    r"""IterationPerformance
    Represents the detailed performance data for a trained iteration
    """
    
    per_tag_performance: Optional[List[TagPerformance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PerTagPerformance') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Precision') }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrecisionStdDeviation') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recall') }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecallStdDeviation') }})
    
