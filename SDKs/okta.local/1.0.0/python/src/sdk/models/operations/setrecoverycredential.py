from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SetRecoveryCredentialPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBodyCredentials:
    recovery_question: Optional[SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovery_question') }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBody:
    credentials: Optional[SetRecoveryCredentialRequestBodyCredentials] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    

@dataclass
class SetRecoveryCredentialRequest:
    path_params: SetRecoveryCredentialPathParams = field()
    request: Optional[SetRecoveryCredentialRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRecoveryCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    
