from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageSearchQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageSearchRequest:
    query_params: GetActionPackageSearchQueryParams = field(default=None)
    

@dataclass
class GetActionPackageSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
