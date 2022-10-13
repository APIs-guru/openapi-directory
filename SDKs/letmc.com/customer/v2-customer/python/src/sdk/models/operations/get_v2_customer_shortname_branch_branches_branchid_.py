from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDPathParams:
    branch_id: str = field(default=None, metadata={'path_param': { 'field_name': 'branchID', 'style': 'simple', 'explode': False }})
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDRequest:
    path_params: GetV2CustomerShortNameBranchBranchesBranchIDPathParams = field(default=None)
    

@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDResponse:
    body: bytes = field(default=None)
    branch_model: Optional[shared.BranchModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
