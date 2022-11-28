from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum(str, Enum):
    METRICS_TYPE_UNSPECIFIED = "METRICS_TYPE_UNSPECIFIED"
    AGGREGATE = "AGGREGATE"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics:
    r"""GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics
    Metrics across multiple confidence levels.
    """
    
    auprc: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auprc') }})
    auprc_exact: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auprcExact') }})
    confidence_level_metrics: Optional[List[GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevelMetrics') }})
    confidence_level_metrics_exact: Optional[List[GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevelMetricsExact') }})
    estimated_calibration_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedCalibrationError') }})
    estimated_calibration_error_exact: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedCalibrationErrorExact') }})
    metrics_type: Optional[GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetricsMetricsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricsType') }})
    
