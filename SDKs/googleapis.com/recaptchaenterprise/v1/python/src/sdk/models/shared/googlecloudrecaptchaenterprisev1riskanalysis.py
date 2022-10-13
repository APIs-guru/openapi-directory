from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum(str, Enum):
    CLASSIFICATION_REASON_UNSPECIFIED = "CLASSIFICATION_REASON_UNSPECIFIED"
    AUTOMATION = "AUTOMATION"
    UNEXPECTED_ENVIRONMENT = "UNEXPECTED_ENVIRONMENT"
    TOO_MUCH_TRAFFIC = "TOO_MUCH_TRAFFIC"
    UNEXPECTED_USAGE_PATTERNS = "UNEXPECTED_USAGE_PATTERNS"
    LOW_CONFIDENCE_SCORE = "LOW_CONFIDENCE_SCORE"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1RiskAnalysis:
    reasons: Optional[List[GoogleCloudRecaptchaenterpriseV1RiskAnalysisReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasons' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
