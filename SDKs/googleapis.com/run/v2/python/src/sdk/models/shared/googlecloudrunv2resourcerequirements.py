from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRunV2ResourceRequirements:
    r"""GoogleCloudRunV2ResourceRequirements
    ResourceRequirements describes the compute resource requirements.
    """
    
    cpu_idle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuIdle') }})
    limits: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limits') }})
    
