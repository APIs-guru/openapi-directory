from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationFollowerCountQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationFollowerCountRequest:
    query_params: GetActionOrganizationFollowerCountQueryParams = field()
    

@dataclass
class GetActionOrganizationFollowerCountResponse:
    content_type: str = field()
    status_code: int = field()
    
