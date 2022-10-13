from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2kanonymityequivalenceclass


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityHistogramBucket:
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketSize' }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValueCount' }})
    bucket_values: Optional[List[googleprivacydlpv2kanonymityequivalenceclass.GooglePrivacyDlpV2KAnonymityEquivalenceClass]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketValues' }})
    equivalence_class_size_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equivalenceClassSizeLowerBound' }})
    equivalence_class_size_upper_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equivalenceClassSizeUpperBound' }})
    
