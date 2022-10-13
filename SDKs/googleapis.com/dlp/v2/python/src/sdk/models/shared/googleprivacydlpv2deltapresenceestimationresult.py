from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deltapresenceestimationhistogrambucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationResult:
    delta_presence_estimation_histogram: Optional[List[googleprivacydlpv2deltapresenceestimationhistogrambucket.GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deltaPresenceEstimationHistogram' }})
    
