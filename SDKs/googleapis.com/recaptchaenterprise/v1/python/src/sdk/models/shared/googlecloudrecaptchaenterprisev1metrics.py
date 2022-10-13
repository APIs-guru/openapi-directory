from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1challengemetrics
from . import googlecloudrecaptchaenterprisev1scoremetrics


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Metrics:
    challenge_metrics: Optional[List[googlecloudrecaptchaenterprisev1challengemetrics.GoogleCloudRecaptchaenterpriseV1ChallengeMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeMetrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    score_metrics: Optional[List[googlecloudrecaptchaenterprisev1scoremetrics.GoogleCloudRecaptchaenterpriseV1ScoreMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoreMetrics' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    
