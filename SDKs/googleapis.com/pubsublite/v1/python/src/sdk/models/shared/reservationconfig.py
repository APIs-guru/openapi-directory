from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ReservationConfig:
    r"""ReservationConfig
    The settings for this topic's Reservation usage.
    """
    
    throughput_reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throughputReservation') }})
    
