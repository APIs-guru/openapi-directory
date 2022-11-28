from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1ContainerSpec:
    r"""GoogleCloudMlV1ContainerSpec
    Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core).
    """
    
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    env: Optional[List[GoogleCloudMlV1EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    ports: Optional[List[GoogleCloudMlV1ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
