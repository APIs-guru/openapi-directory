from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetRentArrearsPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetRentArrearsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetRentArrearsRequest:
    path_params: LandlordControllerGetRentArrearsPathParams = field()
    query_params: LandlordControllerGetRentArrearsQueryParams = field()
    

@dataclass
class LandlordControllerGetRentArrearsResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_rent_arrears_model: Optional[shared.LandlordRentArrearsModel] = field(default=None)
    
