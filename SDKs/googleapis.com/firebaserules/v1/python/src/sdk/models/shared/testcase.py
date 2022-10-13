from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import functionmock

class TestCaseExpectationEnum(str, Enum):
    EXPECTATION_UNSPECIFIED = "EXPECTATION_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"

class TestCaseExpressionReportLevelEnum(str, Enum):
    LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED"
    NONE = "NONE"
    FULL = "FULL"
    VISITED = "VISITED"

class TestCasePathEncodingEnum(str, Enum):
    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    URL_ENCODED = "URL_ENCODED"
    PLAIN = "PLAIN"


@dataclass_json
@dataclass
class TestCase:
    expectation: Optional[TestCaseExpectationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expectation' }})
    expression_report_level: Optional[TestCaseExpressionReportLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expressionReportLevel' }})
    function_mocks: Optional[List[functionmock.FunctionMock]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionMocks' }})
    path_encoding: Optional[TestCasePathEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathEncoding' }})
    request: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    resource: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
