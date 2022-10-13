from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import runtimeacceleratorconfig


@dataclass_json
@dataclass
class SwitchRuntimeRequest:
    accelerator_config: Optional[runtimeacceleratorconfig.RuntimeAcceleratorConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorConfig' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
