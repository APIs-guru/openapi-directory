from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClusterMetadata:
    anthos_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anthosVersion' }})
    backup_crd_versions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupCrdVersions' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    gke_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeVersion' }})
    k8s_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'k8sVersion' }})
    
