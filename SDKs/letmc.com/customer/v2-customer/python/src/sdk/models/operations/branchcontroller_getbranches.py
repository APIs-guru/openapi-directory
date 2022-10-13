from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BranchControllerGetBranchesPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class BranchControllerGetBranchesQueryParams:
    count: int = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class BranchControllerGetBranchesRequest:
    path_params: BranchControllerGetBranchesPathParams = field(default=None)
    query_params: BranchControllerGetBranchesQueryParams = field(default=None)
    

@dataclass
class BranchControllerGetBranchesResponse:
    body: bytes = field(default=None)
    branch_model_results: Optional[shared.BranchModelResults] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
