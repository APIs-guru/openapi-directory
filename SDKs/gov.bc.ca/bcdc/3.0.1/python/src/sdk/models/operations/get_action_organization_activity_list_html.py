from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActionOrganizationActivityListHTMLQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationActivityListHTMLRequest:
    query_params: GetActionOrganizationActivityListHTMLQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationActivityListHTMLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
