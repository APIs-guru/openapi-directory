from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceManifest:
    r"""ResourceManifest
    ResourceManifest represents a single Kubernetes resource to be applied to the cluster.
    """
    
    cluster_scoped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterScoped') }})
    manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manifest') }})
    
