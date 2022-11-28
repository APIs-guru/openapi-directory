from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationActivityListHTMLQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationActivityListHTMLRequest:
    query_params: GetActionOrganizationActivityListHTMLQueryParams = field()
    

@dataclass
class GetActionOrganizationActivityListHTMLResponse:
    content_type: str = field()
    status_code: int = field()
    
