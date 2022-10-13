from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testcase


@dataclass_json
@dataclass
class ListTestCasesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    test_cases: Optional[List[testcase.TestCase]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCases' }})
    
