from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceconfig


@dataclass_json
@dataclass
class CreateInstanceConfigRequest:
    instance_config: Optional[instanceconfig.InstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfig' }})
    instance_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceConfigId' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    
