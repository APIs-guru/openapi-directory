from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetSummaryDetailsPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSummaryDetailsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSummaryDetailsRequest:
    path_params: LandlordControllerGetSummaryDetailsPathParams = field()
    query_params: LandlordControllerGetSummaryDetailsQueryParams = field()
    

@dataclass
class LandlordControllerGetSummaryDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    landlord_summary_model: Optional[shared.LandlordSummaryModel] = field(default=None)
    
