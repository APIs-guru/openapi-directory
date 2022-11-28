from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1AccessControlList:
    r"""GoogleCloudAssetV1p4beta1AccessControlList
    An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
    """
    
    accesses: Optional[List[GoogleCloudAssetV1p4beta1Access]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accesses') }})
    resource_edges: Optional[List[GoogleCloudAssetV1p4beta1Edge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceEdges') }})
    resources: Optional[List[GoogleCloudAssetV1p4beta1Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    
