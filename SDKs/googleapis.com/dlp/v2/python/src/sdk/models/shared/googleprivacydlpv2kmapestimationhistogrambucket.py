from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationHistogramBucket:
    r"""GooglePrivacyDlpV2KMapEstimationHistogramBucket
    A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
    """
    
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[List[GooglePrivacyDlpV2KMapEstimationQuasiIDValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    max_anonymity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxAnonymity') }})
    min_anonymity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minAnonymity') }})
    
