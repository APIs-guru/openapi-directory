from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClusterIstio:
    r"""ClusterIstio
    Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
    """
    
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterName') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    service_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceNamespace') }})
    
