from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kmapestimationhistogrambucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationResult:
    k_map_estimation_histogram: Optional[List[googleprivacydlpv2kmapestimationhistogrambucket.GooglePrivacyDlpV2KMapEstimationHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kMapEstimationHistogram' }})
    
