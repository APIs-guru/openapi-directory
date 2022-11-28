from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics:
    r"""GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics
    Evaluations metrics, at a specific confidence level.
    """
    
    confidence_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevel') }})
    metrics: Optional[GoogleCloudDocumentaiV1beta3EvaluationMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    
