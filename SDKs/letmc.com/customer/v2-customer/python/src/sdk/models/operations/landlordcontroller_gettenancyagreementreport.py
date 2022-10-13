from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetTenancyAgreementReportPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetTenancyAgreementReportQueryParams:
    tenancy_id: str = field(default=None, metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetTenancyAgreementReportRequest:
    path_params: LandlordControllerGetTenancyAgreementReportPathParams = field(default=None)
    query_params: LandlordControllerGetTenancyAgreementReportQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetTenancyAgreementReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
