from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkSwitchPortSchedulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    friday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friday' }})
    monday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monday' }})
    saturday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturday' }})
    sunday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday' }})
    thursday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thursday' }})
    tuesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuesday' }})
    wednesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wednesday' }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port_schedule: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portSchedule' }})
    

@dataclass
class UpdateNetworkSwitchPortScheduleRequest:
    path_params: UpdateNetworkSwitchPortSchedulePathParams = field(default=None)
    request: Optional[UpdateNetworkSwitchPortScheduleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchPortScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_switch_port_schedule_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
