from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responsepolicygkecluster
from . import responsepolicynetwork


@dataclass_json
@dataclass
class ResponsePolicy:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    gke_clusters: Optional[List[responsepolicygkecluster.ResponsePolicyGkeCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeClusters' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    networks: Optional[List[responsepolicynetwork.ResponsePolicyNetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    response_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePolicyName' }})
    
