from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsBenchmarkSummaryPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsBenchmarkSummaryQueryParams:
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    metals: str = field(default=None, metadata={'query_param': { 'field_name': 'metals', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    unitofmeasure: Optional[shared.UnitOfMeasureEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unitofmeasure', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsBenchmarkSummaryRequest:
    path_params: GetAPIVVersionMetalsBenchmarkSummaryPathParams = field(default=None)
    query_params: GetAPIVVersionMetalsBenchmarkSummaryQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionMetalsBenchmarkSummaryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    summary_responses: Optional[List[shared.SummaryResponse]] = field(default=None)
    
