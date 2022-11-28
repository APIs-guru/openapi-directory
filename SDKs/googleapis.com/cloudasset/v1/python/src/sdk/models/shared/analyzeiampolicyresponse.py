from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeIamPolicyResponse:
    r"""AnalyzeIamPolicyResponse
    A response message for AssetService.AnalyzeIamPolicy.
    """
    
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    main_analysis: Optional[IamPolicyAnalysis] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainAnalysis') }})
    service_account_impersonation_analysis: Optional[List[IamPolicyAnalysis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountImpersonationAnalysis') }})
    
