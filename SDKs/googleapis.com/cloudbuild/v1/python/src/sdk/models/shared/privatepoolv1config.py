from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkconfig
from . import workerconfig


@dataclass_json
@dataclass
class PrivatePoolV1Config:
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    worker_config: Optional[workerconfig.WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    
