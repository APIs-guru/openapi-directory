from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnalyzeOrgPolicyGovernedAssetsResponse:
    r"""AnalyzeOrgPolicyGovernedAssetsResponse
    The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.
    """
    
    constraint: Optional[AnalyzerOrgPolicyConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraint') }})
    governed_assets: Optional[List[GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governedAssets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
