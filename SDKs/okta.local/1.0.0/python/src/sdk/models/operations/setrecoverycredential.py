from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class SetRecoveryCredentialPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'question' }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBodyCredentials:
    recovery_question: Optional[SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovery_question' }})
    

@dataclass_json
@dataclass
class SetRecoveryCredentialRequestBody:
    credentials: Optional[SetRecoveryCredentialRequestBodyCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    

@dataclass
class SetRecoveryCredentialRequest:
    path_params: SetRecoveryCredentialPathParams = field(default=None)
    request: Optional[SetRecoveryCredentialRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRecoveryCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
