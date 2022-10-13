from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class DeleteItemsQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteItemsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteItemsRequest:
    query_params: DeleteItemsQueryParams = field(default=None)
    security: DeleteItemsSecurity = field(default=None)
    

@dataclass
class DeleteItemsResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
