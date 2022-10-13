from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    session_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionInfo' }})
    temporary_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'temporaryProof' }})
    verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationProof' }})
    
