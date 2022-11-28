from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetProfitLossReportPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetProfitLossReportQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetProfitLossReportRequest:
    path_params: LandlordControllerGetProfitLossReportPathParams = field()
    query_params: LandlordControllerGetProfitLossReportQueryParams = field()
    

@dataclass
class LandlordControllerGetProfitLossReportResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_profit_loss_model: Optional[shared.LandlordProfitLossModel] = field(default=None)
    
