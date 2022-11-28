from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpec:
    r"""GoogleCloudDataplexV1TaskInfrastructureSpec
    Configuration for the underlying infrastructure used to run workloads.
    """
    
    batch: Optional[GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batch') }})
    container_image: Optional[GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    vpc_network: Optional[GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcNetwork') }})
    
