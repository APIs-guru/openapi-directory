from dataclasses import dataclass, field



@dataclass
class WardsInADistrictPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = field(metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = field(metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class WardsInADistrictRequest:
    path_params: WardsInADistrictPathParams = field()
    

@dataclass
class WardsInADistrictResponse:
    content_type: str = field()
    status_code: int = field()
    
