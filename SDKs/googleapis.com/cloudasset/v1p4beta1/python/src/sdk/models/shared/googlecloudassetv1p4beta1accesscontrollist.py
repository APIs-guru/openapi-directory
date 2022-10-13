from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1p4beta1access
from . import googlecloudassetv1p4beta1edge
from . import googlecloudassetv1p4beta1resource


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1AccessControlList:
    accesses: Optional[List[googlecloudassetv1p4beta1access.GoogleCloudAssetV1p4beta1Access]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accesses' }})
    resource_edges: Optional[List[googlecloudassetv1p4beta1edge.GoogleCloudAssetV1p4beta1Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceEdges' }})
    resources: Optional[List[googlecloudassetv1p4beta1resource.GoogleCloudAssetV1p4beta1Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
