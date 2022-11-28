from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ServicesBookingwindowsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ServicesBookingwindowsIDRequest:
    path_params: GetSetupV1ServicesBookingwindowsIDPathParams = field()
    

@dataclass
class GetSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    booking_window_view_model: Optional[shared.BookingWindowViewModel] = field(default=None)
    
