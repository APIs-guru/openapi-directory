from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceconfig


@dataclass_json
@dataclass
class UpdateInstanceConfigRequest:
    config: Optional[instanceconfig.InstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    
