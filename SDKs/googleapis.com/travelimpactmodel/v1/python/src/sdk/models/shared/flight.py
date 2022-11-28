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
class Flight:
    r"""Flight
    All details related to a single request item for a direct flight emission estimates.
    """
    
    departure_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureDate') }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    flight_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightNumber') }})
    operating_carrier_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingCarrierCode') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    
