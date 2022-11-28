from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryContent:
    r"""QueryContent
    The query content.
    """
    
    iam_policy_analysis_query: Optional[IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamPolicyAnalysisQuery') }})
    
