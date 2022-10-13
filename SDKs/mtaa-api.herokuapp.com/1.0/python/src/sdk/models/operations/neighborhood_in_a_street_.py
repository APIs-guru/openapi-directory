from dataclasses import dataclass, field



@dataclass
class NeighborhoodInAStreetPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = field(default=None, metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    street: str = field(default=None, metadata={'path_param': { 'field_name': 'street', 'style': 'simple', 'explode': False }})
    ward: str = field(default=None, metadata={'path_param': { 'field_name': 'ward', 'style': 'simple', 'explode': False }})
    

@dataclass
class NeighborhoodInAStreetRequest:
    path_params: NeighborhoodInAStreetPathParams = field(default=None)
    

@dataclass
class NeighborhoodInAStreetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
