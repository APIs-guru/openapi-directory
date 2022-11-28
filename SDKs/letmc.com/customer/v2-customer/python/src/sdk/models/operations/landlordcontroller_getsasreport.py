from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetSasReportPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSasReportQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    year_end: int = field(metadata={'query_param': { 'field_name': 'yearEnd', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSasReportRequest:
    path_params: LandlordControllerGetSasReportPathParams = field()
    query_params: LandlordControllerGetSasReportQueryParams = field()
    

@dataclass
class LandlordControllerGetSasReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
