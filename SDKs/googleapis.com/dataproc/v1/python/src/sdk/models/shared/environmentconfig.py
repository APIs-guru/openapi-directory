from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentConfig:
    r"""EnvironmentConfig
    Environment configuration for a workload.
    """
    
    execution_config: Optional[ExecutionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionConfig') }})
    peripherals_config: Optional[PeripheralsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peripheralsConfig') }})
    
