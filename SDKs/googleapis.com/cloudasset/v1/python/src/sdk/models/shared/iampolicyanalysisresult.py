from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1accesscontrollist
from . import binding
from . import googlecloudassetv1identitylist


@dataclass_json
@dataclass
class IamPolicyAnalysisResult:
    access_control_lists: Optional[List[googlecloudassetv1accesscontrollist.GoogleCloudAssetV1AccessControlList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessControlLists' }})
    attached_resource_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachedResourceFullName' }})
    fully_explored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullyExplored' }})
    iam_binding: Optional[binding.Binding] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamBinding' }})
    identity_list: Optional[googlecloudassetv1identitylist.GoogleCloudAssetV1IdentityList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityList' }})
    
