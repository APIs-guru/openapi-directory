from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime:
    r"""GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime
    Software Runtime Configuration to run Analyze.
    """
    
    image_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersion') }})
    java_libraries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('javaLibraries') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    python_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
