from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkFloorPlanPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyBottomLeftCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyBottomRightCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyCenter:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyTopLeftCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBodyTopRightCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class CreateNetworkFloorPlanRequestBody:
    bottom_left_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomLeftCorner' }})
    bottom_right_corner: Optional[CreateNetworkFloorPlanRequestBodyBottomRightCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomRightCorner' }})
    center: Optional[CreateNetworkFloorPlanRequestBodyCenter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'center' }})
    image_contents: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContents' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    top_left_corner: Optional[CreateNetworkFloorPlanRequestBodyTopLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLeftCorner' }})
    top_right_corner: Optional[CreateNetworkFloorPlanRequestBodyTopRightCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topRightCorner' }})
    

@dataclass
class CreateNetworkFloorPlanRequest:
    path_params: CreateNetworkFloorPlanPathParams = field(default=None)
    request: CreateNetworkFloorPlanRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkFloorPlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_floor_plan_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
