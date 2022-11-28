from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackReservationsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsUpdateRequest:
    path_params: DcimRackReservationsUpdatePathParams = field()
    request: shared.WritableRackReservationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackReservationsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_reservation: Optional[shared.RackReservation] = field(default=None)
    
