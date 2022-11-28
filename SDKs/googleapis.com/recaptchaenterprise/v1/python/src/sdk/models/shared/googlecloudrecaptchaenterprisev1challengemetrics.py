from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1ChallengeMetrics:
    r"""GoogleCloudRecaptchaenterpriseV1ChallengeMetrics
    Metrics related to challenges.
    """
    
    failed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedCount') }})
    nocaptcha_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nocaptchaCount') }})
    pageload_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageloadCount') }})
    passed_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passedCount') }})
    
