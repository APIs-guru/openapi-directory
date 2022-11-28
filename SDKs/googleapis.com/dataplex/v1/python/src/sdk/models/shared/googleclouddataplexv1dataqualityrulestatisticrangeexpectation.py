from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum(str, Enum):
    STATISTIC_UNDEFINED = "STATISTIC_UNDEFINED"
    MEAN = "MEAN"
    MIN = "MIN"
    MAX = "MAX"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation:
    r"""GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation
    Evaluates whether the column aggregate statistic lies between a specified range.
    """
    
    max_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    statistic: Optional[GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistic') }})
    strict_max_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMaxEnabled') }})
    strict_min_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictMinEnabled') }})
    
