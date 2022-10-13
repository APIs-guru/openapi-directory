from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationFollowerCountQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationFollowerCountRequest:
    query_params: GetActionOrganizationFollowerCountQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationFollowerCountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
