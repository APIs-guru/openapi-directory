from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1button
from . import googleappscardv1icon
from . import googleappscardv1icon
from . import googleappscardv1onclick
from . import googleappscardv1icon
from . import googleappscardv1switchcontrol


@dataclass_json
@dataclass
class GoogleAppsCardV1DecoratedText:
    bottom_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomLabel' }})
    button: Optional[googleappscardv1button.GoogleAppsCardV1Button] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'button' }})
    end_icon: Optional[googleappscardv1icon.GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endIcon' }})
    icon: Optional[googleappscardv1icon.GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    on_click: Optional[googleappscardv1onclick.GoogleAppsCardV1OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    start_icon: Optional[googleappscardv1icon.GoogleAppsCardV1Icon] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIcon' }})
    switch_control: Optional[googleappscardv1switchcontrol.GoogleAppsCardV1SwitchControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchControl' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    top_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLabel' }})
    wrap_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wrapText' }})
    
