from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesIDBookingwindowsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesIDBookingwindowsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSetupV1ServicesIDBookingwindowsRequest:
    path_params: GetSetupV1ServicesIDBookingwindowsPathParams = field()
    query_params: GetSetupV1ServicesIDBookingwindowsQueryParams = field()
    

@dataclass
class GetSetupV1ServicesIDBookingwindowsResponse:
    content_type: str = field()
    status_code: int = field()
    booking_window_view_model: Optional[shared.BookingWindowViewModel] = field(default=None)
    
