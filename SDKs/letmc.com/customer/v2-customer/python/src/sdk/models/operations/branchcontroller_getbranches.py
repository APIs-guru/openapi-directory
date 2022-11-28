from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BranchControllerGetBranchesPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class BranchControllerGetBranchesQueryParams:
    count: int = field(metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    offset: int = field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class BranchControllerGetBranchesRequest:
    path_params: BranchControllerGetBranchesPathParams = field()
    query_params: BranchControllerGetBranchesQueryParams = field()
    

@dataclass
class BranchControllerGetBranchesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    branch_model_results: Optional[shared.BranchModelResults] = field(default=None)
    
