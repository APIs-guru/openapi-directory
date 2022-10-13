from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1conversationturn

class GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum(str, Enum):
    TEST_RESULT_UNSPECIFIED = "TEST_RESULT_UNSPECIFIED"
    PASSED = "PASSED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestCaseResult:
    conversation_turns: Optional[List[googleclouddialogflowcxv3beta1conversationturn.GoogleCloudDialogflowCxV3beta1ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationTurns' }})
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_result: Optional[GoogleCloudDialogflowCxV3beta1TestCaseResultTestResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testResult' }})
    test_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testTime' }})
    
