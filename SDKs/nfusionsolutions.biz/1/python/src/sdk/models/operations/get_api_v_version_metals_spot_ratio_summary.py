from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSpotRatioSummaryPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSpotRatioSummaryQueryParams:
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pairs: str = field(default=None, metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSpotRatioSummaryRequest:
    path_params: GetAPIVVersionMetalsSpotRatioSummaryPathParams = field(default=None)
    query_params: GetAPIVVersionMetalsSpotRatioSummaryQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionMetalsSpotRatioSummaryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    summary_responses: Optional[List[shared.SummaryResponse]] = field(default=None)
    
