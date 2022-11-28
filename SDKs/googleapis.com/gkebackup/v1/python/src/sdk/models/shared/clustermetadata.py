from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClusterMetadata:
    r"""ClusterMetadata
    Information about the GKE cluster from which this Backup was created.
    """
    
    anthos_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anthosVersion') }})
    backup_crd_versions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupCrdVersions') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    gke_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeVersion') }})
    k8s_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('k8sVersion') }})
    
