from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color
from . import googleappscardv1icon
from . import googleappscardv1onclick


@dataclass_json
@dataclass
class GoogleAppsCardV1Button:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    icon: Optional[googleappscardv1icon.GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    on_click: Optional[googleappscardv1onclick.GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
