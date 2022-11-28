from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestRulesetResponse:
    r"""TestRulesetResponse
    The response for FirebaseRulesService.TestRuleset.
    """
    
    issues: Optional[List[Issue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    test_results: Optional[List[TestResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testResults') }})
    
