from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsReadRequest:
    path_params: DcimRackReservationsReadPathParams = field()
    

@dataclass
class DcimRackReservationsReadResponse:
    content_type: str = field()
    status_code: int = field()
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    
