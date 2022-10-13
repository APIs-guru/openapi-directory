from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ReservationAffinityConsumeReservationTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    NO_RESERVATION = "NO_RESERVATION"
    ANY_RESERVATION = "ANY_RESERVATION"
    SPECIFIC_RESERVATION = "SPECIFIC_RESERVATION"


@dataclass_json
@dataclass
class ReservationAffinity:
    consume_reservation_type: Optional[ReservationAffinityConsumeReservationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumeReservationType' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
