from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LDiversityResult:
    r"""GooglePrivacyDlpV2LDiversityResult
    Result of the l-diversity computation.
    """
    
    sensitive_value_frequency_histogram_buckets: Optional[List[GooglePrivacyDlpV2LDiversityHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveValueFrequencyHistogramBuckets') }})
    
