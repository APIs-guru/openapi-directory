from dataclasses import dataclass, field



@dataclass
class StreetsInAWardPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = field(metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    ward: str = field(metadata={'path_param': { 'field_name': 'ward', 'style': 'simple', 'explode': False }})
    

@dataclass
class StreetsInAWardRequest:
    path_params: StreetsInAWardPathParams = field()
    

@dataclass
class StreetsInAWardResponse:
    content_type: str = field()
    status_code: int = field()
    
