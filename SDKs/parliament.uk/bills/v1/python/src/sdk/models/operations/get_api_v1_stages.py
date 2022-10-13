from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1StagesQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1StagesRequest:
    query_params: GetAPIV1StagesQueryParams = field(default=None)
    

@dataclass
class GetAPIV1StagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    stage_reference_search_result: Optional[shared.StageReferenceSearchResult] = field(default=None)
    status_code: int = field(default=None)
    
