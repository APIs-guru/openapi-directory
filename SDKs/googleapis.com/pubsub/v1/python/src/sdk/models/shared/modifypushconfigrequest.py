from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pushconfig


@dataclass_json
@dataclass
class ModifyPushConfigRequest:
    push_config: Optional[pushconfig.PushConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushConfig' }})
    
