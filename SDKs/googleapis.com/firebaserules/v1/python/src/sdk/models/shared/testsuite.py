from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestSuite:
    r"""TestSuite
    `TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.
    """
    
    test_cases: Optional[List[TestCase]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCases') }})
    
