from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceOptions:
    r"""ResourceOptions
    ResourceOptions represent options for Kubernetes resource generation.
    """
    
    connect_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectVersion') }})
    k8s_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('k8sVersion') }})
    v1beta1_crd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('v1beta1Crd') }})
    
