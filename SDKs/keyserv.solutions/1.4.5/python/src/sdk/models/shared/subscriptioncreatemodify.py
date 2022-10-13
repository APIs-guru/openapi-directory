from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscriptionCreateModify:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    callback_on_modify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackOnModify' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callbackUrl' }})
    custom: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    frequency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    start_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startFrom' }})
    
