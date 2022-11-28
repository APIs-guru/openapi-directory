from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetTenancyPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetTenancyQueryParams:
    tenancy_id: str = field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetTenancyRequest:
    path_params: LandlordControllerGetTenancyPathParams = field()
    query_params: LandlordControllerGetTenancyQueryParams = field()
    

@dataclass
class LandlordControllerGetTenancyResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_tenancy_model: Optional[shared.LandlordTenancyModel] = field(default=None)
    
