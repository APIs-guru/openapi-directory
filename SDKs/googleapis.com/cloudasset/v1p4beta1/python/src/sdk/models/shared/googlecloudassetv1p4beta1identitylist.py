from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1p4beta1edge
from . import googlecloudassetv1p4beta1identity


@dataclass_json
@dataclass
class GoogleCloudAssetV1p4beta1IdentityList:
    group_edges: Optional[List[googlecloudassetv1p4beta1edge.GoogleCloudAssetV1p4beta1Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupEdges' }})
    identities: Optional[List[googlecloudassetv1p4beta1identity.GoogleCloudAssetV1p4beta1Identity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    
