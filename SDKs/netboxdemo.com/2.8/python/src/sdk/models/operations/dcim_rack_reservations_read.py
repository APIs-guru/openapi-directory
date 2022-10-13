from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsReadRequest:
    path_params: DcimRackReservationsReadPathParams = field(default=None)
    

@dataclass
class DcimRackReservationsReadResponse:
    content_type: str = field(default=None)
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    status_code: int = field(default=None)
    
