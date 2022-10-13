from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kmapestimationquasiidvalues


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationHistogramBucket:
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValueCount' }})
    bucket_values: Optional[List[googleprivacydlpv2kmapestimationquasiidvalues.GooglePrivacyDlpV2KMapEstimationQuasiIDValues]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValues' }})
    max_anonymity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAnonymity' }})
    min_anonymity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minAnonymity' }})
    
