from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1AppointmentsBookingfieldsQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1AppointmentsBookingfieldsRequest:
    query_params: GetConsumerV1AppointmentsBookingfieldsQueryParams = field()
    

@dataclass
class GetConsumerV1AppointmentsBookingfieldsResponse:
    content_type: str = field()
    status_code: int = field()
    booking_field_list_view_model: Optional[shared.BookingFieldListViewModel] = field(default=None)
    
