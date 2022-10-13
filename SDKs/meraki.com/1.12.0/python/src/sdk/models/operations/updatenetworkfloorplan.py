from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkFloorPlanPathParams:
    floor_plan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'floorPlanId', 'style': 'simple', 'explode': False }})
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyBottomLeftCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyBottomRightCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyCenter:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyTopLeftCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBodyTopRightCorner:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    

@dataclass_json
@dataclass
class UpdateNetworkFloorPlanRequestBody:
    bottom_left_corner: Optional[UpdateNetworkFloorPlanRequestBodyBottomLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomLeftCorner' }})
    bottom_right_corner: Optional[UpdateNetworkFloorPlanRequestBodyBottomRightCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottomRightCorner' }})
    center: Optional[UpdateNetworkFloorPlanRequestBodyCenter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'center' }})
    image_contents: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageContents' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    top_left_corner: Optional[UpdateNetworkFloorPlanRequestBodyTopLeftCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topLeftCorner' }})
    top_right_corner: Optional[UpdateNetworkFloorPlanRequestBodyTopRightCorner] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topRightCorner' }})
    

@dataclass
class UpdateNetworkFloorPlanRequest:
    path_params: UpdateNetworkFloorPlanPathParams = field(default=None)
    request: Optional[UpdateNetworkFloorPlanRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkFloorPlanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_floor_plan_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
