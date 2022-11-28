from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
    A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
    """
    
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[List[GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    max_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxProbability') }})
    min_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minProbability') }})
    
