from dataclasses import dataclass, field



@dataclass
class DeleteSetupV1ServicesBookingwindowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ServicesBookingwindowsIDRequest:
    path_params: DeleteSetupV1ServicesBookingwindowsIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ServicesBookingwindowsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
