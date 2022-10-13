from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3testcaseresult
from . import googleclouddialogflowcxv3conversationturn
from . import googleclouddialogflowcxv3testconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCase:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    last_test_result: Optional[googleclouddialogflowcxv3testcaseresult.GoogleCloudDialogflowCxV3TestCaseResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTestResult' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    test_case_conversation_turns: Optional[List[googleclouddialogflowcxv3conversationturn.GoogleCloudDialogflowCxV3ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseConversationTurns' }})
    test_config: Optional[googleclouddialogflowcxv3testconfig.GoogleCloudDialogflowCxV3TestConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testConfig' }})
    
