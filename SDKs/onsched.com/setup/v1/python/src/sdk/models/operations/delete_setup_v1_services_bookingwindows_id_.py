from dataclasses import dataclass, field



@dataclass
class DeleteSetupV1ServicesBookingwindowsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesBookingwindowsIDRequest:
    path_params: DeleteSetupV1ServicesBookingwindowsIDPathParams = field()
    

@dataclass
class DeleteSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
