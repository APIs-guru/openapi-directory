from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrunv2envvar
from . import googlecloudrunv2probe
from . import googlecloudrunv2containerport
from . import googlecloudrunv2resourcerequirements
from . import googlecloudrunv2probe
from . import googlecloudrunv2volumemount


@dataclass_json
@dataclass
class GoogleCloudRunV2Container:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    env: Optional[List[googlecloudrunv2envvar.GoogleCloudRunV2EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    liveness_probe: Optional[googlecloudrunv2probe.GoogleCloudRunV2Probe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'livenessProbe' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ports: Optional[List[googlecloudrunv2containerport.GoogleCloudRunV2ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    resources: Optional[googlecloudrunv2resourcerequirements.GoogleCloudRunV2ResourceRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    startup_probe: Optional[googlecloudrunv2probe.GoogleCloudRunV2Probe] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startupProbe' }})
    volume_mounts: Optional[List[googlecloudrunv2volumemount.GoogleCloudRunV2VolumeMount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeMounts' }})
    working_dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workingDir' }})
    
