from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetChangesQueryParams:
    limit: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    since: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChangesRequest:
    query_params: GetChangesQueryParams = field(default=None)
    

@dataclass
class GetChangesResponse:
    content_type: str = field(default=None)
    get_changes_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
