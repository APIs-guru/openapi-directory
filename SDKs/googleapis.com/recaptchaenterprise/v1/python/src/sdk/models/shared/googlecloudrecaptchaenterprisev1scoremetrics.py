from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ScoreMetrics:
    r"""GoogleCloudRecaptchaenterpriseV1ScoreMetrics
    Metrics related to scoring.
    """
    
    action_metrics: Optional[dict[str, GoogleCloudRecaptchaenterpriseV1ScoreDistribution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionMetrics') }})
    overall_metrics: Optional[GoogleCloudRecaptchaenterpriseV1ScoreDistribution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overallMetrics') }})
    
