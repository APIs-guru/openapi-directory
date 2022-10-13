from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetActionOrganizationShowQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    include_datasets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_datasets', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActionOrganizationShowRequest:
    query_params: GetActionOrganizationShowQueryParams = field(default=None)
    

@dataclass
class GetActionOrganizationShowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
