from dataclasses import dataclass, field



@dataclass
class DcimRackReservationsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackReservationsDeleteRequest:
    path_params: DcimRackReservationsDeletePathParams = field()
    

@dataclass
class DcimRackReservationsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
