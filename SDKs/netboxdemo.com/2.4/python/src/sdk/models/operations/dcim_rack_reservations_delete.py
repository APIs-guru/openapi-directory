from dataclasses import dataclass, field



@dataclass
class DcimRackReservationsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsDeleteRequest:
    path_params: DcimRackReservationsDeletePathParams = field(default=None)
    

@dataclass
class DcimRackReservationsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
