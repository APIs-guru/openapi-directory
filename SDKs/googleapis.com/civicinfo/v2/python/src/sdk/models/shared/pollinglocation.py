from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PollingLocation:
    r"""PollingLocation
    A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
    """
    
    address: Optional[SimpleAddressType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    polling_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pollingHours') }})
    sources: Optional[List[Source]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    voter_services: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voterServices') }})
    
