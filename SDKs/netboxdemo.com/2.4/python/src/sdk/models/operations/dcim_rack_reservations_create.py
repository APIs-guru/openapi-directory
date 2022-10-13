from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsCreateRequest:
    request: shared.WritableRackReservation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackReservationsCreateResponse:
    content_type: str = field(default=None)
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    status_code: int = field(default=None)
    
