from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ChangeRecoveryQuestionPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBodyPassword:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBodyRecoveryQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answer' }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'question' }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBody:
    password: Optional[ChangeRecoveryQuestionRequestBodyPassword] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    recovery_question: Optional[ChangeRecoveryQuestionRequestBodyRecoveryQuestion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovery_question' }})
    

@dataclass
class ChangeRecoveryQuestionRequest:
    path_params: ChangeRecoveryQuestionPathParams = field(default=None)
    request: Optional[ChangeRecoveryQuestionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeRecoveryQuestionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
