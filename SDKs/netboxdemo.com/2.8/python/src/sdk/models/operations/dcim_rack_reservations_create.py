from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsCreateRequest:
    request: shared.WritableRackReservationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackReservationsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    
