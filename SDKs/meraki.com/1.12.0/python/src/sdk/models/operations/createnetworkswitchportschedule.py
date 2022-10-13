from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateNetworkSwitchPortSchedulePathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    friday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friday' }})
    monday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monday' }})
    saturday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saturday' }})
    sunday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sunday' }})
    thursday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thursday' }})
    tuesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tuesday' }})
    wednesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wednesday' }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    port_schedule: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portSchedule' }})
    

@dataclass
class CreateNetworkSwitchPortScheduleRequest:
    path_params: CreateNetworkSwitchPortSchedulePathParams = field(default=None)
    request: CreateNetworkSwitchPortScheduleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchPortScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_network_switch_port_schedule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
