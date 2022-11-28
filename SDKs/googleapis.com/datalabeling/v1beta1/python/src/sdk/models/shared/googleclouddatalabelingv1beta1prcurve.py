from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1PrCurve:
    annotation_spec: Optional[GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpec') }})
    area_under_curve: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('areaUnderCurve') }})
    confidence_metrics_entries: Optional[List[GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceMetricsEntries') }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanAveragePrecision') }})
    
