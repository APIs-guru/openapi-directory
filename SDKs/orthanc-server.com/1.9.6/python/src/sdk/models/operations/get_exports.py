from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetExportsQueryParams:
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    since: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportsRequest:
    query_params: GetExportsQueryParams = field()
    

@dataclass
class GetExportsResponse:
    content_type: str = field()
    status_code: int = field()
    get_exports_200_application_json_any: Optional[Any] = field(default=None)
    
