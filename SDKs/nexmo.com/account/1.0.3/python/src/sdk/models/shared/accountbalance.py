from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountBalance:
    auto_reload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoReload' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
