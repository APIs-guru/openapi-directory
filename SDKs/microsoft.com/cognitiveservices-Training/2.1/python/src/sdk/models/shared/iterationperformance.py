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
    
    average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePrecision') }})
    per_tag_performance: Optional[List[TagPerformance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('perTagPerformance') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precisionStdDeviation') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recallStdDeviation') }})
    
