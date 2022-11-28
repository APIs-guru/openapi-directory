from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestRulesetRequest:
    r"""TestRulesetRequest
    The request for FirebaseRulesService.TestRuleset.
    """
    
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    test_suite: Optional[TestSuite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuite') }})
    
