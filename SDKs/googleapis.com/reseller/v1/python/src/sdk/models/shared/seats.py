from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Seats:
    r"""Seats
    JSON template for subscription seats.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    licensed_number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licensedNumberOfSeats') }})
    maximum_number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumNumberOfSeats') }})
    number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfSeats') }})
    
