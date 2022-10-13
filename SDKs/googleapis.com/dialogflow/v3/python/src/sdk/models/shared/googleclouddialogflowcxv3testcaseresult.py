from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3conversationturn

class GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum(str, Enum):
    TEST_RESULT_UNSPECIFIED = "TEST_RESULT_UNSPECIFIED"
    PASSED = "PASSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCaseResult:
    conversation_turns: Optional[List[googleclouddialogflowcxv3conversationturn.GoogleCloudDialogflowCxV3ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationTurns' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_result: Optional[GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testResult' }})
    test_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTime' }})
    
