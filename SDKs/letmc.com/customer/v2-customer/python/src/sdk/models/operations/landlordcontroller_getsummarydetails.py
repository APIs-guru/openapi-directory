from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LandlordControllerGetSummaryDetailsPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSummaryDetailsQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSummaryDetailsRequest:
    path_params: LandlordControllerGetSummaryDetailsPathParams = field(default=None)
    query_params: LandlordControllerGetSummaryDetailsQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetSummaryDetailsResponse:
    content_type: str = field(default=None)
    landlord_summary_model: Optional[shared.LandlordSummaryModel] = field(default=None)
    status_code: int = field(default=None)
    
