from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsageRule:
    allow_unregistered_calls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowUnregisteredCalls' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    skip_service_control: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipServiceControl' }})
    
