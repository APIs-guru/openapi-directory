from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum(str, Enum):
    TESTING_CHALLENGE_UNSPECIFIED = "TESTING_CHALLENGE_UNSPECIFIED"
    NOCAPTCHA = "NOCAPTCHA"
    UNSOLVABLE_CHALLENGE = "UNSOLVABLE_CHALLENGE"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1TestingOptions:
    testing_challenge: Optional[GoogleCloudRecaptchaenterpriseV1TestingOptionsTestingChallengeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingChallenge' }})
    testing_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingScore' }})
    
