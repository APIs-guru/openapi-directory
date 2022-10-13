from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetSasReportPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetSasReportQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    year_end: int = field(default=None, metadata={'query_param': { 'field_name': 'yearEnd', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetSasReportRequest:
    path_params: LandlordControllerGetSasReportPathParams = field(default=None)
    query_params: LandlordControllerGetSasReportQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetSasReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
