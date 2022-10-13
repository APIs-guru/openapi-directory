from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timestamp
from . import filereference
from . import testcasereference


@dataclass_json
@dataclass
class ToolOutputReference:
    creation_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    output: Optional[filereference.FileReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    test_case: Optional[testcasereference.TestCaseReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCase' }})
    
