from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Metrics:
    r"""GoogleCloudRecaptchaenterpriseV1Metrics
    Metrics for a single Key.
    """
    
    challenge_metrics: Optional[List[GoogleCloudRecaptchaenterpriseV1ChallengeMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeMetrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    score_metrics: Optional[List[GoogleCloudRecaptchaenterpriseV1ScoreMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMetrics') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
