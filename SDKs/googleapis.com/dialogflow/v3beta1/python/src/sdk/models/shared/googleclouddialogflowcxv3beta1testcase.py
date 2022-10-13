from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1testcaseresult
from . import googleclouddialogflowcxv3beta1conversationturn
from . import googleclouddialogflowcxv3beta1testconfig


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestCase:
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    last_test_result: Optional[googleclouddialogflowcxv3beta1testcaseresult.GoogleCloudDialogflowCxV3beta1TestCaseResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastTestResult' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    test_case_conversation_turns: Optional[List[googleclouddialogflowcxv3beta1conversationturn.GoogleCloudDialogflowCxV3beta1ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCaseConversationTurns' }})
    test_config: Optional[googleclouddialogflowcxv3beta1testconfig.GoogleCloudDialogflowCxV3beta1TestConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testConfig' }})
    
