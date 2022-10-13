from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import size


@dataclass_json
@dataclass
class ObaIcon:
    icon_click_through_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconClickThroughUrl' }})
    icon_click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconClickTrackingUrl' }})
    icon_view_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconViewTrackingUrl' }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUrl' }})
    size: Optional[size.Size] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    x_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xPosition' }})
    y_position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yPosition' }})
    
