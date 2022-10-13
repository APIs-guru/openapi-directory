from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetResourcesJSONQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesJSONRequest:
    query_params: GetResourcesJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesJSONResponse:
    content_type: str = field(default=None)
    resource_wrappeds: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
