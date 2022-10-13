from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetTenancyPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetTenancyQueryParams:
    tenancy_id: str = field(default=None, metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetTenancyRequest:
    path_params: LandlordControllerGetTenancyPathParams = field(default=None)
    query_params: LandlordControllerGetTenancyQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetTenancyResponse:
    content_type: str = field(default=None)
    landlord_tenancy_model: Optional[shared.LandlordTenancyModel] = field(default=None)
    status_code: int = field(default=None)
    
