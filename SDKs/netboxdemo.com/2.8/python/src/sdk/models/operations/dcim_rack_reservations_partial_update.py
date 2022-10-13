from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsPartialUpdateRequest:
    path_params: DcimRackReservationsPartialUpdatePathParams = field(default=None)
    request: shared.WritableRackReservation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackReservationsPartialUpdateResponse:
    content_type: str = field(default=None)
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    status_code: int = field(default=None)
    
