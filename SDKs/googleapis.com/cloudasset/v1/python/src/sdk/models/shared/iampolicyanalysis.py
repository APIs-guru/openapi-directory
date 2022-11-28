from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IamPolicyAnalysis:
    r"""IamPolicyAnalysis
    An analysis message to group the query and results.
    """
    
    analysis_query: Optional[IamPolicyAnalysisQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisQuery') }})
    analysis_results: Optional[List[IamPolicyAnalysisResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analysisResults') }})
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    non_critical_errors: Optional[List[IamPolicyAnalysisState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCriticalErrors') }})
    
