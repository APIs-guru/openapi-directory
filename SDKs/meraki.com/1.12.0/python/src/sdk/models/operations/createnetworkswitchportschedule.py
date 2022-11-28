from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateNetworkSwitchPortSchedulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    r"""CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
        The schedule for switch port scheduling. Schedules are applied to days of the week.
        When it's empty, default schedule with all days of a week are configured.
        Any unspecified day in the schedule is added as a default schedule configuration of the day.
    
    """
    
    friday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    

@dataclass_json
@dataclass
class CreateNetworkSwitchPortScheduleRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_schedule: Optional[CreateNetworkSwitchPortScheduleRequestBodyPortSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portSchedule') }})
    

@dataclass
class CreateNetworkSwitchPortScheduleRequest:
    path_params: CreateNetworkSwitchPortSchedulePathParams = field()
    request: CreateNetworkSwitchPortScheduleRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateNetworkSwitchPortScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    create_network_switch_port_schedule_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
