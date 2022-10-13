from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1edge
from . import googlecloudassetv1identity


@dataclass_json
@dataclass
class GoogleCloudAssetV1IdentityList:
    group_edges: Optional[List[googlecloudassetv1edge.GoogleCloudAssetV1Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupEdges' }})
    identities: Optional[List[googlecloudassetv1identity.GoogleCloudAssetV1Identity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    
