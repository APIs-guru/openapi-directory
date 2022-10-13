from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcemanifest
from . import resourcemanifest
from . import resourceoptions


@dataclass_json
@dataclass
class KubernetesResource:
    connect_resources: Optional[List[resourcemanifest.ResourceManifest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectResources' }})
    membership_cr_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipCrManifest' }})
    membership_resources: Optional[List[resourcemanifest.ResourceManifest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipResources' }})
    resource_options: Optional[resourceoptions.ResourceOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOptions' }})
    
