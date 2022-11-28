from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TestResultStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class TestResult:
    r"""TestResult
    Test result message containing the state of the test as well as a description and source position for test failures.
    """
    
    debug_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugMessages') }})
    error_position: Optional[SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorPosition') }})
    expression_reports: Optional[List[ExpressionReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressionReports') }})
    function_calls: Optional[List[FunctionCall]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionCalls') }})
    state: Optional[TestResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    visited_expressions: Optional[List[VisitedExpression]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visitedExpressions') }})
    
