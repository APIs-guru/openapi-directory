from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionPackageActivityListHTMLQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageActivityListHTMLRequest:
    query_params: GetActionPackageActivityListHTMLQueryParams = field(default=None)
    

@dataclass
class GetActionPackageActivityListHTMLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
