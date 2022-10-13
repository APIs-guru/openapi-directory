from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetAccountsPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetAccountsQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetAccountsRequest:
    path_params: LandlordControllerGetAccountsPathParams = field(default=None)
    query_params: LandlordControllerGetAccountsQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetAccountsResponse:
    content_type: str = field(default=None)
    landlord_accounting_model: Optional[shared.LandlordAccountingModel] = field(default=None)
    status_code: int = field(default=None)
    
