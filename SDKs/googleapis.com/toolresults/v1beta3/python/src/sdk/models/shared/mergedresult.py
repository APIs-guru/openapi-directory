from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MergedResultStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class MergedResult:
    r"""MergedResult
    Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
    """
    
    outcome: Optional[Outcome] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    state: Optional[MergedResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_suite_overviews: Optional[List[TestSuiteOverview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSuiteOverviews') }})
    
