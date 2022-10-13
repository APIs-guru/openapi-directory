from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudidentitytoolkitv2autoretrievalinfo


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo:
    auto_retrieval_info: Optional[googlecloudidentitytoolkitv2autoretrievalinfo.GoogleCloudIdentitytoolkitV2AutoRetrievalInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRetrievalInfo' }})
    ios_receipt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosReceipt' }})
    ios_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosSecret' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    recaptcha_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recaptchaToken' }})
    safety_net_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safetyNetToken' }})
    
