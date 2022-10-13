from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2ldiversityhistogrambucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LDiversityResult:
    sensitive_value_frequency_histogram_buckets: Optional[List[googleprivacydlpv2ldiversityhistogrambucket.GooglePrivacyDlpV2LDiversityHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveValueFrequencyHistogramBuckets' }})
    
