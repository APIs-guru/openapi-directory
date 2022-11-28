from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KAnonymityHistogramBucket:
    r"""GooglePrivacyDlpV2KAnonymityHistogramBucket
    Histogram of k-anonymity equivalence classes.
    """
    
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[List[GooglePrivacyDlpV2KAnonymityEquivalenceClass]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    equivalence_class_size_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSizeLowerBound') }})
    equivalence_class_size_upper_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('equivalenceClassSizeUpperBound') }})
    
