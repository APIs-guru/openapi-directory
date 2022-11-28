from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagPerformance:
    r"""TagPerformance
    Represents performance data for a particular tag in a trained iteration
    """
    
    average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePrecision') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    precision_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precisionStdDeviation') }})
    recall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recall') }})
    recall_std_deviation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recallStdDeviation') }})
    
