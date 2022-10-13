from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__acceleratorconfig
from . import googlecloudmlv1__diskconfig


@dataclass_json
@dataclass
class GoogleCloudMlV1ReplicaConfig:
    accelerator_config: Optional[googlecloudmlv1__acceleratorconfig.GoogleCloudMlV1AcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorConfig' }})
    container_args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerArgs' }})
    container_command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerCommand' }})
    disk_config: Optional[googlecloudmlv1__diskconfig.GoogleCloudMlV1DiskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskConfig' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    tpu_tf_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tpuTfVersion' }})
    
