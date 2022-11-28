from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDPathParams:
    branch_id: str = field(metadata={'path_param': { 'field_name': 'branchID', 'style': 'simple', 'explode': False }})
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDRequest:
    path_params: GetV2CustomerShortNameBranchBranchesBranchIDPathParams = field()
    

@dataclass
class GetV2CustomerShortNameBranchBranchesBranchIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    branch_model: Optional[shared.BranchModel] = field(default=None)
    
