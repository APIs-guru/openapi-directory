from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1accountdefenderassessment
from . import googlecloudrecaptchaenterprisev1event
from . import googlecloudrecaptchaenterprisev1privatepasswordleakverification
from . import googlecloudrecaptchaenterprisev1riskanalysis
from . import googlecloudrecaptchaenterprisev1tokenproperties


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Assessment:
    account_defender_assessment: Optional[googlecloudrecaptchaenterprisev1accountdefenderassessment.GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountDefenderAssessment' }})
    event: Optional[googlecloudrecaptchaenterprisev1event.GoogleCloudRecaptchaenterpriseV1Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_password_leak_verification: Optional[googlecloudrecaptchaenterprisev1privatepasswordleakverification.GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privatePasswordLeakVerification' }})
    risk_analysis: Optional[googlecloudrecaptchaenterprisev1riskanalysis.GoogleCloudRecaptchaenterpriseV1RiskAnalysis] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'riskAnalysis' }})
    token_properties: Optional[googlecloudrecaptchaenterprisev1tokenproperties.GoogleCloudRecaptchaenterpriseV1TokenProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenProperties' }})
    
