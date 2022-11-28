from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Container:
    r"""Container
    A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    env: Optional[List[EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    env_from: Optional[List[EnvFromSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('envFrom') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    image_pull_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullPolicy') }})
    liveness_probe: Optional[Probe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('livenessProbe') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ports: Optional[List[ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    readiness_probe: Optional[Probe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readinessProbe') }})
    resources: Optional[ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    security_context: Optional[SecurityContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityContext') }})
    startup_probe: Optional[Probe] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startupProbe') }})
    termination_message_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminationMessagePath') }})
    termination_message_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terminationMessagePolicy') }})
    volume_mounts: Optional[List[VolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeMounts') }})
    working_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workingDir') }})
    
