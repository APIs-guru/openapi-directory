from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivatePoolV1Config:
    r"""PrivatePoolV1Config
    Configuration for a V1 `PrivatePool`.
    """
    
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    
