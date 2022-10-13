from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDevicePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateDeviceRequestBody:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    floor_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floorPlanId' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lng' }})
    move_map_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moveMapMarker' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    switch_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switchProfileId' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class UpdateDeviceRequest:
    path_params: UpdateDevicePathParams = field(default=None)
    request: Optional[UpdateDeviceRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
