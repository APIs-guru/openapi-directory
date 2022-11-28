from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AcceleratorConfig:
    r"""AcceleratorConfig
    Specifies the type and number of accelerator cards attached to the instances of an instance. See GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
    """
    
    accelerator_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorCount') }})
    accelerator_type_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorTypeUri') }})
    
