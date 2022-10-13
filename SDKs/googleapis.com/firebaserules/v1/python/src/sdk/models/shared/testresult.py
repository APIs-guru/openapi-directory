from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sourceposition
from . import expressionreport
from . import functioncall
from . import visitedexpression

class TestResultStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class TestResult:
    debug_messages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugMessages' }})
    error_position: Optional[sourceposition.SourcePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorPosition' }})
    expression_reports: Optional[List[expressionreport.ExpressionReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressionReports' }})
    function_calls: Optional[List[functioncall.FunctionCall]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionCalls' }})
    state: Optional[TestResultStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    visited_expressions: Optional[List[visitedexpression.VisitedExpression]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitedExpressions' }})
    
