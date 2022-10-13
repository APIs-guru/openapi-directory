from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2value
from . import googleprivacydlpv2value


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FixedSizeBucketingConfig:
    bucket_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    lower_bound: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowerBound' }})
    upper_bound: Optional[googleprivacydlpv2value.GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upperBound' }})
    
