from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCaseInput:
    r"""GoogleCloudDialogflowCxV3TestCaseInput
    Represents a test case.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    last_test_result: Optional[GoogleCloudDialogflowCxV3TestCaseResultInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTestResult') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    test_case_conversation_turns: Optional[List[GoogleCloudDialogflowCxV3ConversationTurnInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseConversationTurns') }})
    test_config: Optional[GoogleCloudDialogflowCxV3TestConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testConfig') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TestCase:
    r"""GoogleCloudDialogflowCxV3TestCase
    Represents a test case.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    last_test_result: Optional[GoogleCloudDialogflowCxV3TestCaseResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastTestResult') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    test_case_conversation_turns: Optional[List[GoogleCloudDialogflowCxV3ConversationTurn]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseConversationTurns') }})
    test_config: Optional[GoogleCloudDialogflowCxV3TestConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testConfig') }})
    
