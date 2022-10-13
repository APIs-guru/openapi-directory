from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shieldedinstanceconfig


@dataclass_json
@dataclass
class UpdateShieldedInstanceConfigRequest:
    shielded_instance_config: Optional[shieldedinstanceconfig.ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedInstanceConfig' }})
    
