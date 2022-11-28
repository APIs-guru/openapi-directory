from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestCase:
    r"""GoogleCloudDialogflowCxV3beta1TestCase
    Represents a test case.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    last_test_result: Optional[GoogleCloudDialogflowCxV3beta1TestCaseResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTestResult') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    test_case_conversation_turns: Optional[List[GoogleCloudDialogflowCxV3beta1ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseConversationTurns') }})
    test_config: Optional[GoogleCloudDialogflowCxV3beta1TestConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TestCaseInput:
    r"""GoogleCloudDialogflowCxV3beta1TestCaseInput
    Represents a test case.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    last_test_result: Optional[GoogleCloudDialogflowCxV3beta1TestCaseResultInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTestResult') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    test_case_conversation_turns: Optional[List[GoogleCloudDialogflowCxV3beta1ConversationTurnInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseConversationTurns') }})
    test_config: Optional[GoogleCloudDialogflowCxV3beta1TestConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testConfig') }})
    
