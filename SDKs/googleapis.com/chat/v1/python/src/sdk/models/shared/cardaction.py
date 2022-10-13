from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import onclick


@dataclass_json
@dataclass
class CardAction:
    action_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionLabel' }})
    on_click: Optional[onclick.OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    
