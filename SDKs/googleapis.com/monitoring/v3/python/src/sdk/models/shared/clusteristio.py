from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterIstio:
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    service_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceNamespace' }})
    
