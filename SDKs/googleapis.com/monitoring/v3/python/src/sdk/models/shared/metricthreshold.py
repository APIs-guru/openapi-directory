from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MetricThresholdComparisonEnum(str, Enum):
    COMPARISON_UNSPECIFIED = "COMPARISON_UNSPECIFIED"
    COMPARISON_GT = "COMPARISON_GT"
    COMPARISON_GE = "COMPARISON_GE"
    COMPARISON_LT = "COMPARISON_LT"
    COMPARISON_LE = "COMPARISON_LE"
    COMPARISON_EQ = "COMPARISON_EQ"
    COMPARISON_NE = "COMPARISON_NE"

class MetricThresholdEvaluationMissingDataEnum(str, Enum):
    EVALUATION_MISSING_DATA_UNSPECIFIED = "EVALUATION_MISSING_DATA_UNSPECIFIED"
    EVALUATION_MISSING_DATA_INACTIVE = "EVALUATION_MISSING_DATA_INACTIVE"
    EVALUATION_MISSING_DATA_ACTIVE = "EVALUATION_MISSING_DATA_ACTIVE"
    EVALUATION_MISSING_DATA_NO_OP = "EVALUATION_MISSING_DATA_NO_OP"


@dataclass_json
@dataclass
class MetricThreshold:
    r"""MetricThreshold
    A condition type that compares a collection of time series against a threshold.
    """
    
    aggregations: Optional[List[Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregations') }})
    comparison: Optional[MetricThresholdComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparison') }})
    denominator_aggregations: Optional[List[Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominatorAggregations') }})
    denominator_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('denominatorFilter') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    evaluation_missing_data: Optional[MetricThresholdEvaluationMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMissingData') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    threshold_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thresholdValue') }})
    trigger: Optional[Trigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
