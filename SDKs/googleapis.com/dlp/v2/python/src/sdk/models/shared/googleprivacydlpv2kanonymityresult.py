from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kanonymityhistogrambucket


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityResult:
    equivalence_class_histogram_buckets: Optional[List[googleprivacydlpv2kanonymityhistogrambucket.GooglePrivacyDlpV2KAnonymityHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equivalenceClassHistogramBuckets' }})
    
