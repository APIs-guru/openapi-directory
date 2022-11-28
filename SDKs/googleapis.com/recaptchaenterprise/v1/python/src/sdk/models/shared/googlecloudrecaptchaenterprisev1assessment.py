from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Assessment:
    r"""GoogleCloudRecaptchaenterpriseV1Assessment
    A recaptcha assessment resource.
    """
    
    account_defender_assessment: Optional[GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDefenderAssessment') }})
    event: Optional[GoogleCloudRecaptchaenterpriseV1Event] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_password_leak_verification: Optional[GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePasswordLeakVerification') }})
    risk_analysis: Optional[GoogleCloudRecaptchaenterpriseV1RiskAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskAnalysis') }})
    token_properties: Optional[GoogleCloudRecaptchaenterpriseV1TokenProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenProperties') }})
    

@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1AssessmentInput:
    r"""GoogleCloudRecaptchaenterpriseV1AssessmentInput
    A recaptcha assessment resource.
    """
    
    account_defender_assessment: Optional[GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDefenderAssessment') }})
    event: Optional[GoogleCloudRecaptchaenterpriseV1Event] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    private_password_leak_verification: Optional[GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePasswordLeakVerification') }})
    risk_analysis: Optional[GoogleCloudRecaptchaenterpriseV1RiskAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskAnalysis') }})
    token_properties: Optional[GoogleCloudRecaptchaenterpriseV1TokenProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenProperties') }})
    
