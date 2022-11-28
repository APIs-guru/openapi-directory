from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInfrastructureSpec:
    r"""GoogleCloudDataplexV1EnvironmentInfrastructureSpec
    Configuration for the underlying infrastructure used to run workloads.
    """
    
    compute: Optional[GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compute') }})
    os_image: Optional[GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osImage') }})
    
