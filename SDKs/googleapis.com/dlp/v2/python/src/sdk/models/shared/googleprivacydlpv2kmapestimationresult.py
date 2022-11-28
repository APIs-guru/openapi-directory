from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationResult:
    r"""GooglePrivacyDlpV2KMapEstimationResult
    Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
    """
    
    k_map_estimation_histogram: Optional[List[GooglePrivacyDlpV2KMapEstimationHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kMapEstimationHistogram') }})
    
