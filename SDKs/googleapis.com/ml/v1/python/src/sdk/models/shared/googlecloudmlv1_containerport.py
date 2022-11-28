from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1ContainerPort:
    r"""GoogleCloudMlV1ContainerPort
    Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core).
    """
    
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    
