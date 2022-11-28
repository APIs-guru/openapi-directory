from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRuleResult:
    r"""GoogleCloudDataplexV1DataQualityRuleResult
    DataQualityRuleResult provides a more detailed, per-rule level view of the results.
    """
    
    evaluated_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedCount') }})
    failing_rows_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failingRowsQuery') }})
    null_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullCount') }})
    pass_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passRatio') }})
    passed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passed') }})
    passed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passedCount') }})
    rule: Optional[GoogleCloudDataplexV1DataQualityRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
