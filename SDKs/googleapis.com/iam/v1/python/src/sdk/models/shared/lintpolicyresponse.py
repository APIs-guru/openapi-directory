from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LintPolicyResponse:
    r"""LintPolicyResponse
    The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
    """
    
    lint_results: Optional[List[LintResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lintResults') }})
    
