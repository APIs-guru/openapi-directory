from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import envvar
from . import envfromsource
from . import probe
from . import containerport
from . import probe
from . import resourcerequirements
from . import securitycontext
from . import probe
from . import volumemount


@dataclass_json
@dataclass
class Container:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    env: Optional[List[envvar.EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    env_from: Optional[List[envfromsource.EnvFromSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envFrom' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    image_pull_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePullPolicy' }})
    liveness_probe: Optional[probe.Probe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livenessProbe' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ports: Optional[List[containerport.ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    readiness_probe: Optional[probe.Probe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readinessProbe' }})
    resources: Optional[resourcerequirements.ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    security_context: Optional[securitycontext.SecurityContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityContext' }})
    startup_probe: Optional[probe.Probe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startupProbe' }})
    termination_message_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminationMessagePath' }})
    termination_message_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terminationMessagePolicy' }})
    volume_mounts: Optional[List[volumemount.VolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeMounts' }})
    working_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDir' }})
    
