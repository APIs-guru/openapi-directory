from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse:
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresIn' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    is_new_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isNewUser' }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localId' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshToken' }})
    temporary_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryProof' }})
    temporary_proof_expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryProofExpiresIn' }})
    verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationProof' }})
    verification_proof_expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationProofExpiresIn' }})
    
