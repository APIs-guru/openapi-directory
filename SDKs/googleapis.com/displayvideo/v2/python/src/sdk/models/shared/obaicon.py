from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dimensions

class ObaIconPositionEnum(str, Enum):
    OBA_ICON_POSITION_UNSPECIFIED = "OBA_ICON_POSITION_UNSPECIFIED"
    OBA_ICON_POSITION_UPPER_RIGHT = "OBA_ICON_POSITION_UPPER_RIGHT"
    OBA_ICON_POSITION_UPPER_LEFT = "OBA_ICON_POSITION_UPPER_LEFT"
    OBA_ICON_POSITION_LOWER_RIGHT = "OBA_ICON_POSITION_LOWER_RIGHT"
    OBA_ICON_POSITION_LOWER_LEFT = "OBA_ICON_POSITION_LOWER_LEFT"


@dataclass_json
@dataclass
class ObaIcon:
    click_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickTrackingUrl' }})
    dimensions: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    landing_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landingPageUrl' }})
    position: Optional[ObaIconPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    program: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program' }})
    resource_mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceMimeType' }})
    resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUrl' }})
    view_tracking_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewTrackingUrl' }})
    
