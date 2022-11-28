from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""TestCase
    `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
    """
    
    expectation: Optional[TestCaseExpectationEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectation') }})
    expression_report_level: Optional[TestCaseExpressionReportLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expressionReportLevel') }})
    function_mocks: Optional[List[FunctionMock]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionMocks') }})
    path_encoding: Optional[TestCasePathEncodingEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathEncoding') }})
    request: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    resource: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    
