from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfidentialInstanceConfig:
    r"""ConfidentialInstanceConfig
    Confidential Instance Config for clusters using Confidential VMs (https://cloud.google.com/compute/confidential-vm/docs)
    """
    
    enable_confidential_compute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableConfidentialCompute') }})
    
