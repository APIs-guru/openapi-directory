from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IamPolicyAnalysisResult:
    r"""IamPolicyAnalysisResult
    IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
    """
    
    access_control_lists: Optional[List[GoogleCloudAssetV1p4beta1AccessControlList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControlLists') }})
    attached_resource_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachedResourceFullName') }})
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullyExplored') }})
    iam_binding: Optional[Binding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamBinding') }})
    identity_list: Optional[GoogleCloudAssetV1p4beta1IdentityList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityList') }})
    
