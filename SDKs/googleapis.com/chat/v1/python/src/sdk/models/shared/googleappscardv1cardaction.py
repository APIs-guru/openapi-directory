from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1onclick


@dataclass_json
@dataclass
class GoogleAppsCardV1CardAction:
    action_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionLabel' }})
    on_click: Optional[googleappscardv1onclick.GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    
