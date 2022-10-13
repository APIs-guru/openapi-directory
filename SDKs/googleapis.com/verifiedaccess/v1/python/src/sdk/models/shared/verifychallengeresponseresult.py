from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VerifyChallengeResponseResult:
    device_enrollment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceEnrollmentId' }})
    device_permanent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePermanentId' }})
    signed_public_key_and_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signedPublicKeyAndChallenge' }})
    verification_output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationOutput' }})
    
