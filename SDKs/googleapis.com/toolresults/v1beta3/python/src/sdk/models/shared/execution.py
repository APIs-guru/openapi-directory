from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ExecutionStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class Execution:
    r"""Execution
    An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
    """
    
    completion_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    creation_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    dimension_definitions: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionDefinitions') }})
    execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    outcome: Optional[Outcome] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    specification: Optional[Specification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specification') }})
    state: Optional[ExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_execution_matrix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testExecutionMatrixId') }})
    
