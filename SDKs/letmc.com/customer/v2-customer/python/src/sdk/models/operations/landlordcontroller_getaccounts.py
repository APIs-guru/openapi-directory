from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetAccountsPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetAccountsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetAccountsRequest:
    path_params: LandlordControllerGetAccountsPathParams = field()
    query_params: LandlordControllerGetAccountsQueryParams = field()
    

@dataclass
class LandlordControllerGetAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_accounting_model: Optional[shared.LandlordAccountingModel] = field(default=None)
    
