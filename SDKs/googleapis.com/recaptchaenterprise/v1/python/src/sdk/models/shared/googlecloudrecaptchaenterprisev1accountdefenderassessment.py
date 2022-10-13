from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum(str, Enum):
    ACCOUNT_DEFENDER_LABEL_UNSPECIFIED = "ACCOUNT_DEFENDER_LABEL_UNSPECIFIED"
    PROFILE_MATCH = "PROFILE_MATCH"
    SUSPICIOUS_LOGIN_ACTIVITY = "SUSPICIOUS_LOGIN_ACTIVITY"
    SUSPICIOUS_ACCOUNT_CREATION = "SUSPICIOUS_ACCOUNT_CREATION"
    RELATED_ACCOUNTS_NUMBER_HIGH = "RELATED_ACCOUNTS_NUMBER_HIGH"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment:
    labels: Optional[List[GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessmentLabelsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    
