from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest:
    r"""IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
    Request for Identitytoolkit-VerifyPhoneNumber
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    session_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionInfo') }})
    temporary_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temporaryProof') }})
    verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationProof') }})
    
