from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesBookingwindowsRequests:
    booking_window_input_model: Optional[shared.BookingWindowInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    booking_window_input_model1: Optional[shared.BookingWindowInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    booking_window_input_model2: Optional[shared.BookingWindowInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    booking_window_input_model3: Optional[shared.BookingWindowInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesBookingwindowsRequest:
    request: Optional[PostSetupV1ServicesBookingwindowsRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesBookingwindowsResponse:
    booking_window_view_model: Optional[shared.BookingWindowViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
