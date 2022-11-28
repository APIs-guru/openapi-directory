from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRunV2ContainerPort:
    r"""GoogleCloudRunV2ContainerPort
    ContainerPort represents a network port in a single container.
    """
    
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerPort') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
