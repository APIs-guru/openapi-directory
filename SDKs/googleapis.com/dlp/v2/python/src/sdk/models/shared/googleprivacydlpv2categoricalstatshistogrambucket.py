from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CategoricalStatsHistogramBucket:
    r"""GooglePrivacyDlpV2CategoricalStatsHistogramBucket
    Histogram of value frequencies in the column.
    """
    
    bucket_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketSize') }})
    bucket_value_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValueCount') }})
    bucket_values: Optional[List[GooglePrivacyDlpV2ValueFrequency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketValues') }})
    value_frequency_lower_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyLowerBound') }})
    value_frequency_upper_bound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyUpperBound') }})
    
