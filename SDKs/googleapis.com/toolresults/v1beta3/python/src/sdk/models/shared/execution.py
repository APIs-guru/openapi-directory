from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timestamp
from . import timestamp
from . import outcome
from . import specification

class ExecutionStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class Execution:
    completion_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    creation_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    dimension_definitions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionDefinitions' }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionId' }})
    outcome: Optional[outcome.Outcome] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    specification: Optional[specification.Specification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specification' }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    test_execution_matrix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testExecutionMatrixId' }})
    
