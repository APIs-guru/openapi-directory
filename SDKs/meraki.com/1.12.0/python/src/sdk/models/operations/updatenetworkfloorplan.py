from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkFloorPlanPathParams:
    floor_plan_id: str = field(metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner:
    r"""UpdateNetworkFloorPlanRequestBodyBottomLeftCorner
    The longitude and latitude of the bottom left corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyBottomRightCorner:
    r"""UpdateNetworkFloorPlanRequestBodyBottomRightCorner
    The longitude and latitude of the bottom right corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyCenter:
    r"""UpdateNetworkFloorPlanRequestBodyCenter
    The longitude and latitude of the center of your floor plan. If you want to change the geolocation data of your floor plan, either the 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyTopLeftCorner:
    r"""UpdateNetworkFloorPlanRequestBodyTopLeftCorner
    The longitude and latitude of the top left corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyTopRightCorner:
    r"""UpdateNetworkFloorPlanRequestBodyTopRightCorner
    The longitude and latitude of the top right corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBody:
    bottom_left_corner: Optional[UpdateNetworkFloorPlanRequestBodyBottomLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomLeftCorner') }})
    bottom_right_corner: Optional[UpdateNetworkFloorPlanRequestBodyBottomRightCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomRightCorner') }})
    center: Optional[UpdateNetworkFloorPlanRequestBodyCenter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    image_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContents') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    top_left_corner: Optional[UpdateNetworkFloorPlanRequestBodyTopLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLeftCorner') }})
    top_right_corner: Optional[UpdateNetworkFloorPlanRequestBodyTopRightCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topRightCorner') }})
    

@dataclass
class UpdateNetworkFloorPlanRequest:
    path_params: UpdateNetworkFloorPlanPathParams = field()
    request: Optional[UpdateNetworkFloorPlanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkFloorPlanResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_floor_plan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
