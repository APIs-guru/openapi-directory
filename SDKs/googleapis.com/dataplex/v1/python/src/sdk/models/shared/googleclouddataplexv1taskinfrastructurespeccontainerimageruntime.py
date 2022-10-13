from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime:
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    java_jars: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaJars' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    python_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonPackages' }})
    
