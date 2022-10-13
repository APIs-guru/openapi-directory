from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesBookingwindowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesBookingwindowsIDRequests:
    booking_window_update_model: Optional[shared.BookingWindowUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    booking_window_update_model1: Optional[shared.BookingWindowUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    booking_window_update_model2: Optional[shared.BookingWindowUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    booking_window_update_model3: Optional[shared.BookingWindowUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ServicesBookingwindowsIDRequest:
    path_params: PutSetupV1ServicesBookingwindowsIDPathParams = field(default=None)
    request: Optional[PutSetupV1ServicesBookingwindowsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ServicesBookingwindowsIDResponse:
    booking_window_view_model: Optional[shared.BookingWindowViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
