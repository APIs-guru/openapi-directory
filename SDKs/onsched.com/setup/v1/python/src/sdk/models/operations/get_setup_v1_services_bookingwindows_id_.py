from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesBookingwindowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesBookingwindowsIDRequest:
    path_params: GetSetupV1ServicesBookingwindowsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1ServicesBookingwindowsIDResponse:
    booking_window_view_model: Optional[shared.BookingWindowViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
