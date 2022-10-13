from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersBookingfieldsQueryParams:
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locationId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConsumerV1CustomersBookingfieldsRequest:
    query_params: GetConsumerV1CustomersBookingfieldsQueryParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersBookingfieldsResponse:
    booking_field_list_view_model: Optional[shared.BookingFieldListViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
