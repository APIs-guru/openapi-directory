from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestCaseReference:
    r"""TestCaseReference
    A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
    """
    
    class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('className') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    test_suite_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuiteName') }})
    
