from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetTenancyAgreementReportPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetTenancyAgreementReportQueryParams:
    tenancy_id: str = field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetTenancyAgreementReportRequest:
    path_params: LandlordControllerGetTenancyAgreementReportPathParams = field()
    query_params: LandlordControllerGetTenancyAgreementReportQueryParams = field()
    

@dataclass
class LandlordControllerGetTenancyAgreementReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
