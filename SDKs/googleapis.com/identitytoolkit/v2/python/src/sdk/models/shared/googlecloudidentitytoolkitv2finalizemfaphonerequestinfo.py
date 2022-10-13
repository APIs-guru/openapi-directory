from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo:
    android_verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidVerificationProof' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    session_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionInfo' }})
    
