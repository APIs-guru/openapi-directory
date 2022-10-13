from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import verificationtoken


@dataclass_json
@dataclass
class GenerateVerificationTokenResponse:
    token: Optional[verificationtoken.VerificationToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    
