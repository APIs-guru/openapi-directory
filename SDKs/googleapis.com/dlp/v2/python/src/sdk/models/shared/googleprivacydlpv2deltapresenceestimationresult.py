from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationResult:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationResult
    Result of the δ-presence computation. Note that these results are an estimation, not exact values.
    """
    
    delta_presence_estimation_histogram: Optional[List[GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deltaPresenceEstimationHistogram') }})
    
