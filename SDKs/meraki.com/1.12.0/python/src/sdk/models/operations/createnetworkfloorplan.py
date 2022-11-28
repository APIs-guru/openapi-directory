from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkFloorPlanPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyBottomLeftCorner:
    r"""CreateNetworkFloorPlanRequestBodyBottomLeftCorner
    The longitude and latitude of the bottom left corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyBottomRightCorner:
    r"""CreateNetworkFloorPlanRequestBodyBottomRightCorner
    The longitude and latitude of the bottom right corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyCenter:
    r"""CreateNetworkFloorPlanRequestBodyCenter
    The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyTopLeftCorner:
    r"""CreateNetworkFloorPlanRequestBodyTopLeftCorner
    The longitude and latitude of the top left corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyTopRightCorner:
    r"""CreateNetworkFloorPlanRequestBodyTopRightCorner
    The longitude and latitude of the top right corner of your floor plan.
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lng') }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBody:
    image_contents: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContents') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    bottom_left_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomLeftCorner') }})
    bottom_right_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomRightCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottomRightCorner') }})
    center: Optional[CreateNetworkFloorPlanRequestBodyCenter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('center') }})
    top_left_corner: Optional[CreateNetworkFloorPlanRequestBodyTopLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topLeftCorner') }})
    top_right_corner: Optional[CreateNetworkFloorPlanRequestBodyTopRightCorner] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topRightCorner') }})
    

@dataclass
class CreateNetworkFloorPlanRequest:
    path_params: CreateNetworkFloorPlanPathParams = field()
    request: CreateNetworkFloorPlanRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkFloorPlanResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_floor_plan_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
