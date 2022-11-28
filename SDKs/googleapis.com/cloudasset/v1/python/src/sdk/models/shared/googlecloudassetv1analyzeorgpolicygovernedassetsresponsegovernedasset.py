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
class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset:
    r"""GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset
    Represents a GCP asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
    """
    
    consolidated_policy: Optional[AnalyzerOrgPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consolidatedPolicy') }})
    governed_iam_policy: Optional[GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governedIamPolicy') }})
    governed_resource: Optional[GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('governedResource') }})
    policy_bundle: Optional[List[AnalyzerOrgPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBundle') }})
    
