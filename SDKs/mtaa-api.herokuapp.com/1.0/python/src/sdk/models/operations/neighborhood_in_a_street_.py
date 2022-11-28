from dataclasses import dataclass, field



@dataclass
class NeighborhoodInAStreetPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = field(metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    street: str = field(metadata={'path_param': { 'field_name': 'street', 'style': 'simple', 'explode': False }})
    ward: str = field(metadata={'path_param': { 'field_name': 'ward', 'style': 'simple', 'explode': False }})
    

@dataclass
class NeighborhoodInAStreetRequest:
    path_params: NeighborhoodInAStreetPathParams = field()
    

@dataclass
class NeighborhoodInAStreetResponse:
    content_type: str = field()
    status_code: int = field()
    
