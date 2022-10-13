from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1scoredistribution
from . import googlecloudrecaptchaenterprisev1scoredistribution


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ScoreMetrics:
    action_metrics: Optional[dict[str, googlecloudrecaptchaenterprisev1scoredistribution.GoogleCloudRecaptchaenterpriseV1ScoreDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionMetrics' }})
    overall_metrics: Optional[googlecloudrecaptchaenterprisev1scoredistribution.GoogleCloudRecaptchaenterpriseV1ScoreDistribution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overallMetrics' }})
    
