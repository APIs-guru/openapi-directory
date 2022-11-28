from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ReplicaConfig:
    r"""GoogleCloudMlV1ReplicaConfig
    Represents the configuration for a replica in a cluster.
    """
    
    accelerator_config: Optional[GoogleCloudMlV1AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    container_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerArgs') }})
    container_command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerCommand') }})
    disk_config: Optional[GoogleCloudMlV1DiskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskConfig') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    tpu_tf_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpuTfVersion') }})
    
