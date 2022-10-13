from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudRunV2ContainerPort:
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPort' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
