from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import issue
from . import testresult


@dataclass_json
@dataclass
class TestRulesetResponse:
    issues: Optional[List[issue.Issue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues' }})
    test_results: Optional[List[testresult.TestResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testResults' }})
    
