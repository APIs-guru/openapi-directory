from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources:
    r"""GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources
    Batch compute resources associated with the task.
    """
    
    executors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executorsCount') }})
    max_executors_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxExecutorsCount') }})
    
