from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2bucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BucketingConfig:
    buckets: Optional[List[googleprivacydlpv2bucket.GooglePrivacyDlpV2Bucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buckets' }})
    
