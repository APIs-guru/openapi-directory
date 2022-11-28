from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReservationAffinityConsumeReservationTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    NO_RESERVATION = "NO_RESERVATION"
    ANY_RESERVATION = "ANY_RESERVATION"
    SPECIFIC_RESERVATION = "SPECIFIC_RESERVATION"


@dataclass_json
@dataclass
class ReservationAffinity:
    r"""ReservationAffinity
    Reservation Affinity for consuming Zonal reservation.
    """
    
    consume_reservation_type: Optional[ReservationAffinityConsumeReservationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumeReservationType') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
