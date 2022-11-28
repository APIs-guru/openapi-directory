from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetInvetoryReportPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetInvetoryReportQueryParams:
    tenancy_id: str = field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetInvetoryReportRequest:
    path_params: LandlordControllerGetInvetoryReportPathParams = field()
    query_params: LandlordControllerGetInvetoryReportQueryParams = field()
    

@dataclass
class LandlordControllerGetInvetoryReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
