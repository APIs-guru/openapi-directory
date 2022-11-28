from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeOrgPoliciesResponse:
    r"""AnalyzeOrgPoliciesResponse
    The response message for AssetService.AnalyzeOrgPolicies.
    """
    
    constraint: Optional[AnalyzerOrgPolicyConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    org_policy_results: Optional[List[OrgPolicyResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgPolicyResults') }})
    
