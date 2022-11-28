from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CategoricalStatsResult:
    r"""GooglePrivacyDlpV2CategoricalStatsResult
    Result of the categorical stats computation.
    """
    
    value_frequency_histogram_buckets: Optional[List[GooglePrivacyDlpV2CategoricalStatsHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueFrequencyHistogramBuckets') }})
    
