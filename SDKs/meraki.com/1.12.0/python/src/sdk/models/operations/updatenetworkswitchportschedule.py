from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkSwitchPortSchedulePathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    port_schedule_id: str = field(metadata={'path_param': { 'field_name': 'portScheduleId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
    The schedule object for Friday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
    The schedule object for Monday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
    The schedule object for Saturday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
    The schedule object for Sunday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
    The schedule object for Thursday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
    The schedule object for Tuesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
    The schedule object for Wednesday.
    """
    
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule:
    r"""UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
        The schedule for switch port scheduling. Schedules are applied to days of the week.
        When it's empty, default schedule with all days of a week are configured.
        Any unspecified day in the schedule is added as a default schedule configuration of the day.
    
    """
    
    friday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friday') }})
    monday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monday') }})
    saturday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saturday') }})
    sunday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sunday') }})
    thursday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thursday') }})
    tuesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tuesday') }})
    wednesday: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wednesday') }})
    

@dataclass_json
@dataclass
class UpdateNetworkSwitchPortScheduleRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    port_schedule: Optional[UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portSchedule') }})
    

@dataclass
class UpdateNetworkSwitchPortScheduleRequest:
    path_params: UpdateNetworkSwitchPortSchedulePathParams = field()
    request: Optional[UpdateNetworkSwitchPortScheduleRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkSwitchPortScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_switch_port_schedule_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
