from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum(str, Enum):
    TESTING_CHALLENGE_UNSPECIFIED = "TESTING_CHALLENGE_UNSPECIFIED"
    NOCAPTCHA = "NOCAPTCHA"
    UNSOLVABLE_CHALLENGE = "UNSOLVABLE_CHALLENGE"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1TestingOptions:
    r"""GoogleCloudRecaptchaenterpriseV1TestingOptions
    Options for user acceptance testing.
    """
    
    testing_challenge: Optional[GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingChallenge') }})
    testing_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingScore') }})
    
