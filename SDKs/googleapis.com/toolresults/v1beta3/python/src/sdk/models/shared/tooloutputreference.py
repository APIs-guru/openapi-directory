from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ToolOutputReference:
    r"""ToolOutputReference
    A reference to a ToolExecution output file.
    """
    
    creation_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    output: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    test_case: Optional[TestCaseReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCase') }})
    
