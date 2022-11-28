from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ChangeRecoveryQuestionPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBodyPassword:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBodyRecoveryQuestion:
    answer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answer') }})
    question: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('question') }})
    

@dataclass_json
@dataclass
class ChangeRecoveryQuestionRequestBody:
    password: Optional[ChangeRecoveryQuestionRequestBodyPassword] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    recovery_question: Optional[ChangeRecoveryQuestionRequestBodyRecoveryQuestion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recovery_question') }})
    

@dataclass
class ChangeRecoveryQuestionRequest:
    path_params: ChangeRecoveryQuestionPathParams = field()
    request: Optional[ChangeRecoveryQuestionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeRecoveryQuestionResponse:
    content_type: str = field()
    status_code: int = field()
    
