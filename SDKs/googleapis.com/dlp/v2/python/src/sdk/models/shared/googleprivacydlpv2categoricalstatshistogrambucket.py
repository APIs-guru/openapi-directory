from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2valuefrequency


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CategoricalStatsHistogramBucket:
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValueCount' }})
    bucket_values: Optional[List[googleprivacydlpv2valuefrequency.GooglePrivacyDlpV2ValueFrequency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValues' }})
    value_frequency_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFrequencyLowerBound' }})
    value_frequency_upper_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueFrequencyUpperBound' }})
    
