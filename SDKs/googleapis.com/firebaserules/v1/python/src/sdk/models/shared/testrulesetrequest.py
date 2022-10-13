from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import source
from . import testsuite


@dataclass_json
@dataclass
class TestRulesetRequest:
    source: Optional[source.Source] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    test_suite: Optional[testsuite.TestSuite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSuite' }})
    
