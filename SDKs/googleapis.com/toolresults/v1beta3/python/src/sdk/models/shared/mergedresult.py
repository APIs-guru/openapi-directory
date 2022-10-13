from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import outcome
from . import testsuiteoverview

class MergedResultStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class MergedResult:
    outcome: Optional[outcome.Outcome] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    state: Optional[MergedResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    test_suite_overviews: Optional[List[testsuiteoverview.TestSuiteOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSuiteOverviews' }})
    
