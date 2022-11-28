from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime:
    r"""GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime
    Container Image Runtime Configuration used with Batch execution.
    """
    
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    java_jars: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('javaJars') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    python_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonPackages') }})
    
