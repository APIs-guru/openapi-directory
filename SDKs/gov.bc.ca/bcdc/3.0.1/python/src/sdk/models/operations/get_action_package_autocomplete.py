from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionPackageAutocompleteQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionPackageAutocompleteRequest:
    query_params: GetActionPackageAutocompleteQueryParams = field()
    

@dataclass
class GetActionPackageAutocompleteResponse:
    content_type: str = field()
    status_code: int = field()
    
