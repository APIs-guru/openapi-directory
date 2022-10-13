from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import aggregation
from . import aggregation
from . import trigger

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
    aggregations: Optional[List[aggregation.Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregations' }})
    comparison: Optional[MetricThresholdComparisonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparison' }})
    denominator_aggregations: Optional[List[aggregation.Aggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denominatorAggregations' }})
    denominator_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denominatorFilter' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    evaluation_missing_data: Optional[MetricThresholdEvaluationMissingDataEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationMissingData' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    threshold_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thresholdValue' }})
    trigger: Optional[trigger.Trigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    
