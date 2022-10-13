from dataclasses import dataclass, field



@dataclass
class WardsInADistrictPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    district: str = field(default=None, metadata={'path_param': { 'field_name': 'district', 'style': 'simple', 'explode': False }})
    region: str = field(default=None, metadata={'path_param': { 'field_name': 'region', 'style': 'simple', 'explode': False }})
    

@dataclass
class WardsInADistrictRequest:
    path_params: WardsInADistrictPathParams = field(default=None)
    

@dataclass
class WardsInADistrictResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
