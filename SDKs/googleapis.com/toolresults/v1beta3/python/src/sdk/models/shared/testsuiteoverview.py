from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestSuiteOverview:
    r"""TestSuiteOverview
    A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.
    """
    
    elapsed_time: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedTime') }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCount') }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCount') }})
    flaky_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flakyCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    skipped_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedCount') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    xml_source: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xmlSource') }})
    
