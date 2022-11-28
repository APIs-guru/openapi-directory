from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRuleRangeExpectation:
    r"""GoogleCloudDataplexV1DataQualityRuleRangeExpectation
    Evaluates whether each column value lies between a specified range.
    """
    
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    strict_max_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMaxEnabled') }})
    strict_min_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMinEnabled') }})
    
