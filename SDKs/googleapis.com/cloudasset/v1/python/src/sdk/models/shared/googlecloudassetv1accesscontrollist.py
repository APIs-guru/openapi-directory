from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudassetv1access
from . import conditionevaluation
from . import googlecloudassetv1edge
from . import googlecloudassetv1resource


@dataclass_json
@dataclass
class GoogleCloudAssetV1AccessControlList:
    accesses: Optional[List[googlecloudassetv1access.GoogleCloudAssetV1Access]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accesses' }})
    condition_evaluation: Optional[conditionevaluation.ConditionEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionEvaluation' }})
    resource_edges: Optional[List[googlecloudassetv1edge.GoogleCloudAssetV1Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceEdges' }})
    resources: Optional[List[googlecloudassetv1resource.GoogleCloudAssetV1Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    
