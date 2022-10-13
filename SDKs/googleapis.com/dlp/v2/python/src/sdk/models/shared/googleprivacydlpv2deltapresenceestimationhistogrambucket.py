from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2deltapresenceestimationquasiidvalues


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket:
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValueCount' }})
    bucket_values: Optional[List[googleprivacydlpv2deltapresenceestimationquasiidvalues.GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValues' }})
    max_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxProbability' }})
    min_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minProbability' }})
    
