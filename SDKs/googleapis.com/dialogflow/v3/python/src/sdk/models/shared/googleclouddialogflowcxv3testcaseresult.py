from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum(str, Enum):
    TEST_RESULT_UNSPECIFIED = "TEST_RESULT_UNSPECIFIED"
    PASSED = "PASSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCaseResult:
    r"""GoogleCloudDialogflowCxV3TestCaseResult
    Represents a result from running a test case in an agent environment.
    """
    
    conversation_turns: Optional[List[GoogleCloudDialogflowCxV3ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationTurns') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_result: Optional[GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testResult') }})
    test_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCaseResultInput:
    r"""GoogleCloudDialogflowCxV3TestCaseResultInput
    Represents a result from running a test case in an agent environment.
    """
    
    conversation_turns: Optional[List[GoogleCloudDialogflowCxV3ConversationTurnInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationTurns') }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_result: Optional[GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testResult') }})
    test_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testTime') }})
    
