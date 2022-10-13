from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class MergeVersionsQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class MergeVersionsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MergeVersionsRequest:
    query_params: MergeVersionsQueryParams = field(default=None)
    security: MergeVersionsSecurity = field(default=None)
    

@dataclass
class MergeVersionsResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
