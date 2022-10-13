from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2ldiversityequivalenceclass


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LDiversityHistogramBucket:
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValueCount' }})
    bucket_values: Optional[List[googleprivacydlpv2ldiversityequivalenceclass.GooglePrivacyDlpV2LDiversityEquivalenceClass]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValues' }})
    sensitive_value_frequency_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveValueFrequencyLowerBound' }})
    sensitive_value_frequency_upper_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensitiveValueFrequencyUpperBound' }})
    
