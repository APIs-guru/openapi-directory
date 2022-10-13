from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime:
    image_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageVersion' }})
    java_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'javaLibraries' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    python_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonPackages' }})
    
