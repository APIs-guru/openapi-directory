from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Seats:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    licensed_number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licensedNumberOfSeats' }})
    maximum_number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumNumberOfSeats' }})
    number_of_seats: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfSeats' }})
    
