from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStudiesQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'full', 'style': 'form', 'explode': True }})
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    short: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'short', 'style': 'form', 'explode': True }})
    since: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudiesRequest:
    query_params: GetStudiesQueryParams = field(default=None)
    

@dataclass
class GetStudiesResponse:
    content_type: str = field(default=None)
    get_studies_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
