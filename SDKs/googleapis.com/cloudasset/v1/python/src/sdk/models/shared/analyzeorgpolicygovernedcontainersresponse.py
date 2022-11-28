from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeOrgPolicyGovernedContainersResponse:
    r"""AnalyzeOrgPolicyGovernedContainersResponse
    The response message for AssetService.AnalyzeOrgPolicyGovernedContainers.
    """
    
    constraint: Optional[AnalyzerOrgPolicyConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    governed_containers: Optional[List[GoogleCloudAssetV1GovernedContainer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governedContainers') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
