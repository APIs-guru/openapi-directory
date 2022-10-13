from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__envvar
from . import googlecloudmlv1__containerport


@dataclass_json
@dataclass
class GoogleCloudMlV1ContainerSpec:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    env: Optional[List[googlecloudmlv1__envvar.GoogleCloudMlV1EnvVar]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    ports: Optional[List[googlecloudmlv1__containerport.GoogleCloudMlV1ContainerPort]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ports' }})
    
