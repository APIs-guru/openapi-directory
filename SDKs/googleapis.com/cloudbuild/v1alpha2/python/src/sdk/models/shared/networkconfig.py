from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkConfig:
    r"""NetworkConfig
    Network describes the network configuration for a `WorkerPool`.
    """
    
    peered_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeredNetwork') }})
    
