from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValidateConsumerConfigRequest:
    check_service_networking_use_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkServiceNetworkingUsePermission') }})
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    consumer_project: Optional[ConsumerProject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerProject') }})
    range_reservation: Optional[RangeReservation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeReservation') }})
    validate_network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateNetwork') }})
    
