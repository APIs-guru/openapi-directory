from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationAutocompleteQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationAutocompleteRequest:
    query_params: GetActionOrganizationAutocompleteQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationAutocompleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
