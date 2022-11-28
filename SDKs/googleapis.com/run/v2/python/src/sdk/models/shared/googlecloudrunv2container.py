from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRunV2Container:
    r"""GoogleCloudRunV2Container
    A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    env: Optional[List[GoogleCloudRunV2EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    liveness_probe: Optional[GoogleCloudRunV2Probe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessProbe') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ports: Optional[List[GoogleCloudRunV2ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    resources: Optional[GoogleCloudRunV2ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    startup_probe: Optional[GoogleCloudRunV2Probe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startupProbe') }})
    volume_mounts: Optional[List[GoogleCloudRunV2VolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeMounts') }})
    working_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDir') }})
    
